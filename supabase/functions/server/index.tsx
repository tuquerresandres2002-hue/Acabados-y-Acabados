import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-461311e2/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-461311e2/contact", async (c) => {
  console.log("Recibida solicitud en /contact");
  try {
    const body = await c.req.json();
    console.log("Cuerpo de la solicitud:", body);
    const { name, phone, service, message } = body;

    if (!name || !phone) {
      console.log("Faltan campos obligatorios: name o phone");
      return c.json({ error: "Nombre y teléfono son obligatorios" }, 400);
    }

    const timestamp = new Date().toISOString();
    const leadId = `lead:${timestamp}:${phone}`;

    console.log(`Intentando guardar lead con ID: ${leadId}`);
    
    await kv.set(leadId, {
      id: leadId,
      name,
      phone,
      service,
      message,
      createdAt: timestamp,
      source: 'landing_page'
    });

    console.log(`Lead guardado exitosamente: ${leadId}`);
    return c.json({ success: true, message: "Información recibida y guardada en la tabla kv_store_461311e2" });
  } catch (error) {
    console.error("Error detallado al guardar el lead:", error);
    return c.json({ 
      error: "Error interno del servidor al procesar el contacto", 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

Deno.serve(app.fetch);
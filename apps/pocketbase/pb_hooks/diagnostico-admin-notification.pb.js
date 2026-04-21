/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const nombre = e.record.get("nombre");
  const email = e.record.get("email");
  const empresa = e.record.get("empresa");
  const telefono = e.record.get("telefono");
  
  const htmlContent = `
    <h2>Nuevo Diagnóstico Recibido</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Empresa:</strong> ${empresa}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>ID del Registro:</strong> ${e.record.id}</p>
    <p><strong>Fecha de Creación:</strong> ${e.record.get("created")}</p>
  `;
  
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "restrepomiguel@proton.me" }],
    subject: "Nuevo contacto: " + nombre,
    html: htmlContent
  });
  
  try {
    $app.newMailClient().send(message);
  } catch (err) {
    $app.logger().error("Failed to send diagnostico admin notification email", "error", err);
  }
  e.next();

}, "diagnosticos");
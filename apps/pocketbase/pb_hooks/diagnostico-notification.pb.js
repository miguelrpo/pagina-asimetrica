/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const nombre = e.record.get("nombre");
  const email = e.record.get("email");
  const empresa = e.record.get("empresa");
  const telefono = e.record.get("telefono");
  const created = e.record.get("created");

  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "restrepomiguel@proton.me" }],
    subject: "Nuevo Diagnóstico Gratis - " + nombre,
    html: "<h2>Nuevo Diagnóstico Recibido</h2>" +
          "<p><strong>Nombre:</strong> " + nombre + "</p>" +
          "<p><strong>Email:</strong> " + email + "</p>" +
          "<p><strong>Empresa:</strong> " + empresa + "</p>" +
          "<p><strong>Teléfono:</strong> " + telefono + "</p>" +
          "<p><strong>Fecha de Creación:</strong> " + created + "</p>"
  });
  try {
    $app.newMailClient().send(message);
  } catch (err) {
    $app.logger().error("Failed to send diagnostico notification email", "error", err);
  }
  e.next();

}, "diagnosticos");
function cambiarContenido(seccion, enlace) {
  const contenido = document.getElementById('contenido');

  const secciones = {
    inicio: '<h2>Descripción general</h2><p>Administre Google Workspace fácilmente.</p>',
    extremo: '<h2>Extremo</h2><p>Información sobre el acceso y control extremos.</p>',
    regiones: '<h2>Regiones de datos</h2><p>Administre dónde se almacenan sus datos.</p>',
    alertas: '<h2>Centro de alertas</h2><p>Vea alertas importantes para su organización.</p>',
    seguridad: '<h2>Centro de seguridad</h2><p>Configure políticas de seguridad.</p>',
    consola: '<h2>Consola del administrador</h2><p>Acceso rápido a las funciones de administración.</p>',
    ventas: '<h2>Comunicarse con ventas</h2><p>Póngase en contacto con nuestro equipo de ventas.</p>',
    comenzar: '<h2>Comience ahora</h2><p>Empiece a utilizar Google Workspace hoy mismo.</p>'
  };

  contenido.innerHTML = secciones[seccion] || '<h2>Bienvenido</h2><p>Seleccione una opción del menú.</p>';

  // Limpiar clases activas de enlaces del menú superior
  document.querySelectorAll('.item-menu').forEach(el => el.classList.remove('activo'));
  // Agregar clase activa al enlace clicado si pertenece al menú superior
  if (enlace && enlace.classList.contains('item-menu')) {
    enlace.classList.add('activo');
  }

  // Limpiar clases activas de botones del menú secundario
  document.querySelectorAll('.barra-secundaria button').forEach(btn => btn.classList.remove('activo-secundario'));
  // Agregar clase activa al botón clicado si pertenece a la barra secundaria
  if (enlace && enlace.tagName === 'BUTTON') {
    enlace.classList.add('activo-secundario');
  }
}

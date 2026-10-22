// Script inline que aplica el tema guardado antes del primer pintado (evita parpadeo).
// Sin preferencia guardada manda el sistema vía CSS. Su hash SHA-256 se permite en la CSP (next.config.ts):
// si cambias este texto, el hash se recalcula solo en el siguiente build.
export const temaInicial = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

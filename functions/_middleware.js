
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Click URL
  if (url.pathname === "/click") {
    return Response.redirect("https://techecono.com/uofl", 302);
  }

  // Image link
  if (url.pathname === "/image") {
    return Response.redirect("https://raw.githubusercontent.com/maliksqueen125-z11y/introduce/refs/heads/main/vtr15.jpg", 302);
  }

  return context.next();
}

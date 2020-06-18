export const template = `
<!-- Можно с пробелами, можно без-->
<ul class="{{ className }}" data-chat-id="{{chat.id}}" onClick="{{handleClick}}">
  {{ items }}
</ul>
`;

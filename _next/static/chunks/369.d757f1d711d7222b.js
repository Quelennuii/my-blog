"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{1369:function(t,e,s){s.r(e);var n=s(5893),a=s(7294),i=s(425),c=s(7059),o=s.n(c);e.default=function(t){var e=t.mapping,s=(0,a.useState)(!0),c=s[0],r=s[1],m=(0,i.F)(),u=m.theme,d=m.resolvedTheme,g=""===o().comment.giscusConfig.themeURL?"dark"===u||"dark"===d?o().comment.giscusConfig.darkTheme:o().comment.giscusConfig.theme:o().comment.giscusConfig.themeURL,f="comments-container",p=(0,a.useCallback)((function(){r(!1);var t=document.createElement("script");t.src="https://giscus.app/client.js",t.setAttribute("data-repo",o().comment.giscusConfig.repo),t.setAttribute("data-repo-id",o().comment.giscusConfig.repositoryId),t.setAttribute("data-category",o().comment.giscusConfig.category),t.setAttribute("data-category-id",o().comment.giscusConfig.categoryId),t.setAttribute("data-mapping",e),t.setAttribute("data-reactions-enabled",o().comment.giscusConfig.reactions),t.setAttribute("data-emit-metadata",o().comment.giscusConfig.metadata),t.setAttribute("data-theme",g),t.setAttribute("crossorigin","anonymous"),t.async=!0;var s=document.getElementById(f);return s&&s.appendChild(t),function(){var t=document.getElementById(f);t&&(t.innerHTML="")}}),[g,e]);return(0,a.useEffect)((function(){document.querySelector("iframe.giscus-frame")&&p()}),[p]),(0,n.jsxs)("div",{className:"pb-6 pt-6 text-center text-gray-700 dark:text-gray-300",children:[c&&(0,n.jsx)("button",{onClick:p,children:"Load Comments"}),(0,n.jsx)("div",{className:"giscus",id:f})]})}}}]);
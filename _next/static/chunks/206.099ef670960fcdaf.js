(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[206],{24137:function(e,r){"use strict";r.Z={src:"/_next/static/media/calendar.181d629a.svg",height:24,width:24}},80206:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return R}});var a=t(85893),i=t(67294),_=t(45697),d=t.n(_),c=t(71317),n=t.n(c),s=t(93967),l=t.n(s),o=t(25675),m=t.n(o),u=t(77780),p=t.n(u),h=t(50549),g=(t(34714),{src:"/_next/static/media/eye-grey.dbc29787.svg",height:20,width:20}),v=t(24137),j=t(9094),y=t.n(j),f=t(91629),x=t.n(f),C=function(e){var r=e.article,t=e.utm,_=e.loading,d=e.customHeight,c=e.timeVisible,n=e.publishedAt,s=(0,i.useState)(!1),o=s[0],u=s[1];return(0,a.jsx)("a",{href:r.link+(null!==t&&void 0!==t?t:""),target:"_blank",className:x().card__link,rel:"noreferrer",children:(0,a.jsxs)("div",{className:l()(x().card,y()["card--small"],d&&y()["card--small-height"]),children:[(0,a.jsxs)("div",{className:y().card__bg,onMouseOver:function(){u(!0)},children:[_?(0,a.jsx)(h.Z,{height:"100%",borderRadius:14}):(0,a.jsx)(m(),{src:r.image,layout:"fill",objectFit:"cover",alt:r.title.replace(/\"/g,"")}),o&&(0,a.jsx)("div",{className:y().card__cover,onMouseLeave:function(){u(!1)},children:(0,a.jsx)("span",{children:"\u0427\u0438\u0442\u0430\u0442\u044c"})})]}),(0,a.jsxs)("div",{className:y()["card-content"],children:[n&&(0,a.jsxs)("div",{className:y().card__date,children:[(0,a.jsx)("div",{className:y()["card__date-icon"],children:(0,a.jsx)(m(),{src:v.Z,alt:"calendar-icon"})}),(0,a.jsx)("div",{children:new Date(n).toLocaleDateString()})]}),c&&(0,a.jsxs)("div",{className:y().card__time,children:[_?(0,a.jsx)(h.Z,{width:20,height:20}):r.readTime&&(0,a.jsx)(m(),{src:g,alt:"eye-icon"}),_?(0,a.jsx)(h.Z,{width:100,height:20}):r.readTime&&(0,a.jsx)("span",{children:p()(r.readTime,"%d \u043c\u0438\u043d\u0443\u0442\u0430 \u0447\u0442\u0435\u043d\u0438\u044f","%d \u043c\u0438\u043d\u0443\u0442\u044b \u0447\u0442\u0435\u043d\u0438\u044f","%d \u043c\u0438\u043d\u0443\u0442 \u0447\u0442\u0435\u043d\u0438\u044f")})]}),(0,a.jsx)("p",{className:y().card__title,children:_?(0,a.jsx)(h.Z,{height:50}):r.title})]})]})})};C.propTypes={article:d().shape({link:d().string,title:d().string,description:d().string,image:d().string,readTime:d().number}),utm:d().string};var b=i.memo(C),w=function(e){var r=e.article,t=e.utm;return(0,a.jsx)("a",{href:r.link+t,target:"_blank",className:x().card__link,children:(0,a.jsxs)("div",{className:l()(x().card,y()["card--tiny"]),children:[r.readTime&&(0,a.jsxs)("div",{className:y().card__time,children:[(0,a.jsx)(m(),{src:g,alt:"eye-icon"}),(0,a.jsx)("span",{children:p()(r.readTime,"%d \u043c\u0438\u043d\u0443\u0442\u0430 \u0447\u0442\u0435\u043d\u0438\u044f","%d \u043c\u0438\u043d\u0443\u0442\u044b \u0447\u0442\u0435\u043d\u0438\u044f","%d \u043c\u0438\u043d\u0443\u0442 \u0447\u0442\u0435\u043d\u0438\u044f")})]}),(0,a.jsx)("p",{className:y().card__title,children:r.title})]})})};w.propTypes={article:d().shape({link:d().string,title:d().string,description:d().string,image:d().string,readTime:d().number}),utm:d().string};var T=i.memo(w),N=function(e){var r=e.type,t=e.article,i=e.utmContent,_=e.loading,d=e.customHeight,c=e.timeVisible,n=void 0===c||c,s=e.publishedAt,l=e.utm;if("undefined"===typeof t)return null;switch("undefined"!==typeof i&&(l="?utm_source=dobro&utm_medium=organic&utm_campaign=dobrotojournal&utm_content="+i),"undefined"===typeof l&&(l=""),r){case"small":return(0,a.jsx)(b,{article:t,utm:l,loading:_,customHeight:d,timeVisible:n,publishedAt:s});case"tiny":return(0,a.jsx)(T,{article:t,utm:l});default:throw new Error("\u041f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0442\u0438\u043f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 Article"+r)}};N.propTypes={type:d().oneOf(["full","small","tiny"]),article:d().shape({link:d().string,title:d().string,readTime:d().number}),utmContent:d().string,utm:d().string};var k=i.memo(N),A=t(27127),D=t(42410),Z=t.n(D),O=t(69757),I=function(e){var r=e.title,t=e.articles,i=e.utmContent,_=e.showDjournalLink,d=void 0===_||_,c=e.showMoreLink,s=void 0===c?"https://dobro.press/?utm_source=dobro&utm_medium=organic&utm_campaign=dobrotojournal&utm_content=mainpage":c,l="undefined"!==typeof i?"utm_source=dobro&utm_medium=organic&utm_campaign=dobrotojournal&utm_content="+i:"",o=(0,O.Z)().width;return(0,a.jsx)("div",{className:Z()["container--cards"],children:(0,a.jsxs)("div",{className:Z().wrapper,children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col d-flex justify-content-between align-items-center",children:(0,a.jsxs)("h2",{className:Z().title,children:[r,d&&(0,a.jsx)("a",{href:"https://dobro.press/rubrics/nastavnichestvo?"+l,className:Z()["title--link"],target:"_blank",rel:"noopener noreferrer",children:" \u0432 \u0414\u043e\u0431\u0440\u043e.\u0416\u0443\u0440\u043d\u0430\u043b\u0435"})]})})}),(0,a.jsxs)(n(),{animateIn:"fadeIn",animateOnce:!0,children:[(0,a.jsx)("div",{className:Z()["cards-wrapper"],children:t.slice(0,4).map((function(e,r){return(0,a.jsx)("div",{className:Z().card,children:(0,a.jsx)(k,{type:o>575?"small":"tiny",article:e,utmContent:i})},r)}))}),(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col d-flex justify-content-center",children:(0,a.jsx)(A.Z,{componentType:A.U.PRIMARY_OUTLINE,tag:"a",href:s,className:Z()["show-all-btn"],target:"_blank",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"})})})]})]})})};I.propTypes={title:d().string,articles:d().array,articlesCount:d().number,articlesNextFrom:d().number,utmContent:d().string};var R=i.memo(I)},9094:function(e){e.exports={"card--small":"ArticleCard_card--small__jDmLG","card--small-height":"ArticleCard_card--small-height__h9wuC",card__cover:"ArticleCard_card__cover___OPW7",card__bg:"ArticleCard_card__bg__fRSjH","card-content":"ArticleCard_card-content__3gwSj",card__date:"ArticleCard_card__date__pRpJv","card__date-icon":"ArticleCard_card__date-icon__5NUQG",card__time:"ArticleCard_card__time__6ntTq",card__title:"ArticleCard_card__title__R309E","card--tiny":"ArticleCard_card--tiny__cA6MQ"}},91629:function(e){e.exports={card:"CardTypes_card__8RnSK","card--highlighted":"CardTypes_card--highlighted__ozp_j",card__link:"CardTypes_card__link__pDAeX","card-university":"CardTypes_card-university__8pbf1","card-university__img":"CardTypes_card-university__img__ltw5h","card-university__title":"CardTypes_card-university__title__nKjj9","card-university__title--verified":"CardTypes_card-university__title--verified___uhrD","card-university__rating":"CardTypes_card-university__rating__fv6yw","card-location":"CardTypes_card-location__md8vb","card-time":"CardTypes_card-time__PQbrb","card-date":"CardTypes_card-date__nDytI","card-location__title":"CardTypes_card-location__title__zYkaG","card-time__title":"CardTypes_card-time__title__WY_3I","card-date__title":"CardTypes_card-date__title__JUJN0","card-location__image_top":"CardTypes_card-location__image_top__itFJm","card-time__image_top":"CardTypes_card-time__image_top__5UZeo","card-date__image_top":"CardTypes_card-date__image_top__l5Wgb","card-location__title_with_overflow":"CardTypes_card-location__title_with_overflow__bgixb","card-time__title_with_overflow":"CardTypes_card-time__title_with_overflow___YNMT","card-date__title_with_overflow":"CardTypes_card-date__title_with_overflow__ZZdCY",card__text:"CardTypes_card__text__imhZl"}},42410:function(e){e.exports={title:"CardsDjournal_title__PvOYg","title--link":"CardsDjournal_title--link__iACcO",card:"CardsDjournal_card__Fee1C","cards-wrapper":"CardsDjournal_cards-wrapper__5GbbD","container--cards":"CardsDjournal_container--cards__N2z4S",wrapper:"CardsDjournal_wrapper__GIKTO","wrapper--small":"CardsDjournal_wrapper--small__lSA5_","show-all-btn":"CardsDjournal_show-all-btn__wYcxD"}},34714:function(){}}]);
"use strict";(self.webpackChunkslim_moms_frontend=self.webpackChunkslim_moms_frontend||[]).push([[16],{9055:function(n,e,t){t.d(e,{x:function(){return o}});var i=t(6088),r=t(407),o=(0,i.Z)("div")(r.$_,r.Dh,r.bK,r.GQ,r.eC,r.AF,r.Cg,r.cp,r.Oq,r.FK)},3016:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var i,r,o,s,a,l,d,c=t(7617),p=t(1055),x=t(885),u=t(2791),m=t(9434),h=t(5705),f=t(2797),g=t(168),w=t(6088),b=t(2986),j=t(9468),Z=w.Z.a(i||(i=(0,g.Z)(["\n  width: 182px;\n  height: 44px;\n  padding: 12px 16px 12px 42px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  font-weight: ",";\n  border-radius: 30px;\n  border: 2px solid ",";\n  color: ",";\n  font-size: ",";\n  box-shadow: '0px 4px 10px 0px #fc842d80';\n  transition: ",";\n  color: ",";\n  cursor: pointer;\n  background-image: url(",");\n  background-color: ",";\n  background-repeat: no-repeat;\n  background-position: 12px 11px;\n  &:hover,\n  :focus {\n    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n  }\n"])),j.r.fontWeights.bold,j.r.colors.accent,j.r.colors.white,j.r.fontSizes.s,j.r.transition.all,j.r.colors.accent,b.Z,j.r.colors.white),v=(0,w.Z)(h.l0)(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 76px;\n\n  @media screen and (min-width: 768px) {\n    align-items: start;\n    gap: 60px;\n  }\n"]))),k=w.Z.label(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  width: 280px;\n  position: relative;\n"])),(function(n){return n.theme.colors.textFirst}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.bold})),y=(0,w.Z)(h.gN)(s||(s=(0,g.Z)(["\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  outline-color: ",";\n  width: 100%;\n  height: 20px;\n  @media screen and (min-width: 768px) {\n    max-width: 240px;\n  }\n   &:focus,\n  &:hover {\n    outline: none;\n  }\n  &:focus,\n  :hover {\n    border-bottom: 1px solid #fc842d;\n  }\n\n  &::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n"])),(function(n){return n.theme.colors.accent})),F=w.Z.p(a||(a=(0,g.Z)(["\n  color: red;\n  width: 100%;\n  text-align: justify;\n"]))),S=t(8724),_=t(3802),z=t(1087),C=t(9055),q=(t(5462),t(3904)),G=t(3329),I=function(n){var e=n.name;return(0,G.jsx)(h.Bc,{name:e,render:function(n){return(0,G.jsx)(F,{children:n})}})},P=f.Ry().shape({email:f.Z_().email("Please enter a valid email").required("Email is a required field"),password:f.Z_().min(3,"Password must be at least 3 characters").required("Password is a required field")}),D={email:"",password:""},L=function(){var n=(0,u.useState)(!1),e=(0,x.Z)(n,2),t=e[0],i=e[1],r=(0,m.I0)();return(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(h.J9,{initialValues:D,onSubmit:function(n,e){var t=n.email,i=n.password,o=e.resetForm;r((0,S.Ib)({email:t,password:i})),o()},validationSchema:P,children:(0,G.jsxs)(v,{autoComplete:"off",children:[(0,G.jsxs)(C.x,{display:"flex",flexDirection:"column",alignItems:"center",mt:"55px",gridGap:"40px",children:[(0,G.jsxs)(k,{htmlFor:"email",children:["Email *",(0,G.jsx)(y,{type:"email",name:"email"}),(0,G.jsx)(I,{name:"email",component:"p"})]}),(0,G.jsxs)(k,{htmlFor:"password",children:["Password *",(0,G.jsx)(y,{name:"password",type:t?"true":"password"}),(0,G.jsx)(I,{name:"password",component:"p"}),(0,G.jsx)(q.p,{handleClick:function(){return i(!t)},show:t})]})]}),(0,G.jsxs)(C.x,{display:"flex",flexDirection:["column","row"],alignItems:"center",gridGap:["20px","32px"],children:[(0,G.jsx)(_.aT,{text:"Log in"}),(0,G.jsx)(z.rU,{to:"/registration",children:(0,G.jsx)(_.yS,{text:"Register"})}),(0,G.jsx)(Z,{href:"http://localhost:5001/api/auth/google",children:"Google auth"})]})]})})})},O=t(8226),E=w.Z.div(l||(l=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 40px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    padding-top: 160px;\n  }\n  \n"]))),K=w.Z.h1(d||(d=(0,g.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.s})),N=function(){var n=(0,O.a)().isLoading;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(c.O,{}),(0,G.jsxs)(E,{children:[(0,G.jsx)(K,{children:"LOG IN"}),(0,G.jsx)(L,{}),n&&(0,G.jsx)(p.Z,{})]})]})}}}]);
//# sourceMappingURL=16.11865e53.chunk.js.map
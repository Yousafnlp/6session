(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6633:function(e,t,a){Promise.resolve().then(a.bind(a,5129)),Promise.resolve().then(a.bind(a,5337)),Promise.resolve().then(a.bind(a,16)),Promise.resolve().then(a.bind(a,2562)),Promise.resolve().then(a.bind(a,267)),Promise.resolve().then(a.bind(a,9117)),Promise.resolve().then(a.t.bind(a,5878,23))},5337:function(e,t,a){"use strict";a.d(t,{default:function(){return F}});var s=a(7437),r=a(9574),l=a(2869),i=a(2265),o=a(7053),n=a(9501),d=a(4508),c=a(6394);let m=(0,a(535).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(c.f,{ref:t,className:(0,d.cn)(m(),a),...r})});u.displayName=c.f.displayName;let g=n.RV,f=i.createContext({}),x=e=>{let{...t}=e;return(0,s.jsx)(f.Provider,{value:{name:t.name},children:(0,s.jsx)(n.Qr,{...t})})},h=()=>{let e=i.useContext(f),t=i.useContext(b),{getFieldState:a,formState:s}=(0,n.Gc)(),r=a(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=t;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...r}},b=i.createContext({}),p=i.forwardRef((e,t)=>{let{className:a,...r}=e,l=i.useId();return(0,s.jsx)(b.Provider,{value:{id:l},children:(0,s.jsx)("div",{ref:t,className:(0,d.cn)("space-y-2",a),...r})})});p.displayName="FormItem";let v=i.forwardRef((e,t)=>{let{className:a,...r}=e,{error:l,formItemId:i}=h();return(0,s.jsx)(u,{ref:t,className:(0,d.cn)(l&&"text-destructive",a),htmlFor:i,...r})});v.displayName="FormLabel";let j=i.forwardRef((e,t)=>{let{...a}=e,{error:r,formItemId:l,formDescriptionId:i,formMessageId:n}=h();return(0,s.jsx)(o.g7,{ref:t,id:l,"aria-describedby":r?"".concat(i," ").concat(n):"".concat(i),"aria-invalid":!!r,...a})});j.displayName="FormControl",i.forwardRef((e,t)=>{let{className:a,...r}=e,{formDescriptionId:l}=h();return(0,s.jsx)("p",{ref:t,id:l,className:(0,d.cn)("text-sm text-muted-foreground",a),...r})}).displayName="FormDescription";let A=i.forwardRef((e,t)=>{let{className:a,children:r,...l}=e,{error:i,formMessageId:o}=h(),n=i?String(null==i?void 0:i.message):r;return n?(0,s.jsx)("p",{ref:t,id:o,className:(0,d.cn)("text-sm font-medium text-destructive",a),...l,children:n}):null});A.displayName="FormMessage";let y=i.forwardRef((e,t)=>{let{className:a,type:r,...l}=e;return(0,s.jsx)("input",{type:r,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...l})});y.displayName="Input";var N=a(2364),w=a(519);let E=i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(N.fC,{className:(0,d.cn)("grid gap-2",a),...r,ref:t})});E.displayName=N.fC.displayName;let C=i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(N.ck,{ref:t,className:(0,d.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),...r,children:(0,s.jsx)(N.z$,{className:"flex items-center justify-center",children:(0,s.jsx)(w.Z,{className:"h-2.5 w-2.5 fill-current text-current"})})})});C.displayName=N.ck.displayName;var k=a(3590),R=a(1229);let I=R.Ry({name:R.Z_().min(2,"Name must be at least 2 characters"),email:R.Z_().email("Invalid email address"),contact:R.Z_({required_error:"Number is Required"}).min(11,"Contact number must be at least 11 digits").regex(/^\d+$/,"Contact number must be numeric"),dob:R.Z_({required_error:"Please select your date of birth"}),gender:R.Km(["male","female","other"],{required_error:"Please select your gender"}),course:R.Km(["consultation","sessions"],{required_error:"Please select your concern"})});function F(){let e=(0,n.cI)({resolver:(0,k.F)(I),defaultValues:{name:"",email:"",contact:"",dob:""}});async function t(e){try{let t=await fetch("https://yousafmunawartrainings-backend-live.vercel.app/register",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),a=await t.json();console.log("Server Response:",a)}catch(e){console.error("Error submitting form:",e)}}return(0,s.jsx)("section",{className:"relative bg-navy min-h-screen py-20 overflow-hidden",id:"register",children:(0,s.jsx)("div",{className:"container relative mx-auto px-4 z-10",children:(0,s.jsxs)(r.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-xl mx-auto",children:[(0,s.jsxs)("div",{className:"text-center mb-10",children:[(0,s.jsx)("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4",children:"Register Now"}),(0,s.jsx)("p",{className:"text-gray-400",children:"Take the first step towards transforming your life"})]}),(0,s.jsx)(g,{...e,children:(0,s.jsxs)("form",{onSubmit:e.handleSubmit(t),className:"space-y-6 bg-navy-50/30 backdrop-blur-sm p-6 rounded-lg border border-gold/20",children:[(0,s.jsx)(x,{control:e.control,name:"name",render:e=>{let{field:t}=e;return(0,s.jsxs)(p,{children:[(0,s.jsx)(v,{className:"text-white",children:"Full Name"}),(0,s.jsx)(j,{children:(0,s.jsx)(y,{placeholder:"Enter your full name",className:"bg-navy-50/50 border-gold/20 text-white placeholder:text-gray-500",...t})}),(0,s.jsx)(A,{})]})}}),(0,s.jsx)(x,{control:e.control,name:"email",render:e=>{let{field:t}=e;return(0,s.jsxs)(p,{children:[(0,s.jsx)(v,{className:"text-white",children:"Email"}),(0,s.jsx)(j,{children:(0,s.jsx)(y,{placeholder:"Enter your email",type:"email",className:"bg-navy-50/50 border-gold/20 text-white placeholder:text-gray-500",...t})}),(0,s.jsx)(A,{})]})}}),(0,s.jsx)(x,{control:e.control,name:"contact",render:e=>{let{field:t}=e;return(0,s.jsxs)(p,{children:[(0,s.jsx)(v,{className:"text-white",children:"Phone Number"}),(0,s.jsx)(j,{children:(0,s.jsx)(y,{placeholder:"Enter your phone number",className:"bg-navy-50/50 border-gold/20 text-white placeholder:text-gray-500",...t})}),(0,s.jsx)(A,{})]})}}),(0,s.jsx)(x,{control:e.control,name:"dob",render:e=>{let{field:t}=e;return(0,s.jsxs)(p,{children:[(0,s.jsx)(v,{className:"text-white",children:"Date of Birth"}),(0,s.jsx)(j,{children:(0,s.jsx)(y,{placeholder:"Enter your date of birth",className:"bg-navy-50/50 border-gold/20 text-white placeholder:text-gray-500",...t})}),(0,s.jsx)(A,{})]})}}),(0,s.jsx)(x,{control:e.control,name:"gender",render:e=>{let{field:t}=e;return(0,s.jsxs)(p,{className:"space-y-3",children:[(0,s.jsx)(v,{className:"text-white",children:"Gender"}),(0,s.jsx)(j,{children:(0,s.jsx)(E,{onValueChange:t.onChange,defaultValue:t.value,className:"flex flex-wrap gap-4",children:["male","female","other"].map(e=>(0,s.jsxs)(p,{className:"flex items-center space-x-3 space-y-0",children:[(0,s.jsx)(j,{children:(0,s.jsx)(C,{value:e,className:"border-gold/20 text-gold"})}),(0,s.jsx)(v,{className:"text-white font-normal capitalize",children:e})]},e))})}),(0,s.jsx)(A,{})]})}}),(0,s.jsx)(l.z,{type:"submit",className:"w-full bg-gold hover:bg-gold-light text-navy font-medium text-[16px] transition-all duration-300 transform hover:scale-[1.02]",children:"Submit Registration"})]})})]})})})}},16:function(e,t,a){"use strict";a.d(t,{default:function(){return d}});var s=a(7437),r=a(6858),l=a(7648),i=a(2869),o=a(9574),n=a(5411);function d(){return(0,s.jsxs)("section",{className:"relative min-h-screen pt-20 bg-hero-texture bg-cover bg-center bg-no-repeat flex justify-center items-center overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"}),(0,s.jsxs)("div",{className:"absolute inset-0 z-0",children:[(0,s.jsx)("div",{className:"absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-float"}),(0,s.jsx)("div",{className:"absolute top-40 left-20 w-1 h-1 bg-gold-light/40 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute top-60 left-32 w-3 h-3 bg-gold/30 rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute bottom-32 left-16 w-2 h-2 bg-gold-dark/50 rounded-full animate-float-fast"}),(0,s.jsx)("div",{className:"absolute top-1/4 left-1/2 w-2 h-2 bg-gold/60 rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute top-1/3 left-1/3 w-3 h-3 bg-gold-light/40 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute bottom-1/4 left-2/3 w-2 h-2 bg-gold-dark/50 rounded-full animate-float"}),(0,s.jsx)("div",{className:"absolute top-24 right-16 w-2 h-2 bg-gold/70 rounded-full animate-float-fast"}),(0,s.jsx)("div",{className:"absolute top-48 right-28 w-1.5 h-1.5 bg-gold-light rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute top-72 right-20 w-1 h-1 bg-gold/40 rounded-full animate-float"}),(0,s.jsx)("div",{className:"absolute bottom-36 right-32 w-3 h-3 bg-gold-dark/30 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute bottom-28 right-28 w-3 h-3 bg-gold-dark/30 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute bottom-28 left-8 w-3 h-3 bg-gold-dark/30 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute bottom-52 right-12 w-2 h-2 bg-gold-light/60 rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute top-12 left-6 w-1 h-1 bg-gold/50 rounded-full animate-float-fast"}),(0,s.jsx)("div",{className:"absolute top-8 right-8 w-1.5 h-1.5 bg-gold-light/40 rounded-full animate-float"}),(0,s.jsx)("div",{className:"absolute bottom-10 left-8 w-2 h-2 bg-gold-dark/30 rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute bottom-16 right-10 w-1 h-1 bg-gold/60 rounded-full animate-float-slow"})]}),(0,s.jsx)("div",{className:"relative px-4 text-white flex items-center flex-col justify-center max-w-4xl mx-auto",children:(0,s.jsxs)(o.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center",children:[(0,s.jsx)("h1",{className:"text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent",children:"6 Session Series"}),(0,s.jsx)("div",{className:"text-xl md:text-2xl font-medium text-center h-16",children:(0,s.jsx)(n.e,{sequence:["Transform Your Mind",1e3,"Transform Your Life",1e3,"Embrace Freedom",1e3,"Live Pain-Free!",1e3],wrapper:"h2",speed:50,repeat:Number.POSITIVE_INFINITY,className:"text-gray-200"})}),(0,s.jsx)(o.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:(0,s.jsx)(i.z,{asChild:!0,className:"bg-gold hover:bg-gold-light text-navy font-semibold px-5 py-4 text-lg gap-0 transform  animate-scale-loop",children:(0,s.jsxs)(l.default,{href:"/#register",children:["Register Now",(0,s.jsx)(r.Z,{className:"ml-2 h-4 w-4"})]})})}),(0,s.jsxs)(o.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.8},className:"mt-12 text-md text-white max-w-md mx-auto",children:["Price: ",(0,s.jsx)("s",{children:"30,000/-"}),"❌ now 12,880/- ✅ only"]}),(0,s.jsx)(o.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.8},className:"mt-6 text-sm text-gray-400 max-w-md mx-auto",children:"Join our transformative coaching program and discover the path to personal growth and emotional freedom."})]})}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy to-transparent"})]})}},2562:function(e,t,a){"use strict";a.d(t,{default:function(){return g}});var s=a(7437),r=a(9574),l=a(5411),i=a(2265),o=a(4508);let n=i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...r})});n.displayName="Card";let d=i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",a),...r})});d.displayName="CardHeader",i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",a),...r})}).displayName="CardTitle",i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...r})}).displayName="CardDescription";let c=i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",a),...r})});function m(e){let{number:t,title:a,description:l}=e;return(0,s.jsx)(r.E.div,{whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,s.jsxs)(n,{className:"bg-navy-50/30 backdrop-blur-sm border-gold/60  shadow-md hover:border-gold transition-colors duration-300 overflow-hidden relative group",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),(0,s.jsx)(d,{className:"relative z-10 p-4 pb-0",children:(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsx)("span",{className:"text-4xl font-bold text-gold opacity-50",children:t.toString().padStart(2,"0")}),(0,s.jsx)("h3",{className:"md:text-xl text-lg leading-6 font-semibold text-gold",children:a})]})}),(0,s.jsx)(c,{className:"relative z-10 p-4",children:(0,s.jsx)("p",{className:"text-gray-300 text-sm leading-relaxed",children:l})})]})})}c.displayName="CardContent",i.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",a),...r})}).displayName="CardFooter";let u=[{number:1,title:"Guidance and Counseling",description:"Focusing on history taking and establishing a foundation for the coaching journey."},{number:2,title:"Anger and Sadness",description:"Dedicated to addressing and healing negative emotions like anger and sadness."},{number:3,title:"Guilt and Fears",description:"Continuation of the emotional healing process, healing guilts and fears."},{number:4,title:"Betrayal",description:"Final session in the emotional healing, healing betrayals consolidating progress and techniques."},{number:5,title:"Thoughts Restructuring",description:"Focus on breaking overthinking patterns and restructuring thought processes for better mental clarity."},{number:6,title:"Future Pace and Goal Setting",description:"Aimed at setting future goals and establishing a positive outlook moving forward."}];function g(){return(0,s.jsx)("div",{className:"min-h-screen bg-navy text-white flex justify-center items-center",children:(0,s.jsx)("main",{className:"px-4 py-10 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,s.jsxs)(r.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center mb-14",children:[(0,s.jsx)("h1",{className:"text-4xl md:text-6xl font-extrabold text-gold mb-4",children:"6 Session Series"}),(0,s.jsx)("p",{className:"text-xl text-gray-300 h-14 ",children:(0,s.jsx)(l.e,{sequence:["Transform Your Mind, Transform Your Life",2e3,"Embrace Freedom, Live Pain-Free!",2e3],speed:50,repeat:Number.POSITIVE_INFINITY})})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map((e,t)=>(0,s.jsx)(r.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:(0,s.jsx)(m,{number:e.number,title:e.title,description:e.description})},e.number))})]})})})}},267:function(e,t,a){"use strict";a.d(t,{default:function(){return h}});var s=a(7437),r=a(2265),l={src:"/_next/static/media/dp.c8bacefb.png",height:809,width:694,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA3UlEQVR42mNoSGRgZACCvGAGwTR/hrS2HEVZEL8oio2RYXZXDzOIs7A1c972BZP/T62JnwLi99eUsjD0L7kG1nl9w9QzF9bN+79jcn4TiL+6v5aNAQa2TsyYvryr8v/+5Z1JDDBwaFmRSERi7KrW7gl/jx89/r+sdcJ/n6TM68un56owtJSHBYi7hf0PL+/+v/3g2X+qsSV/xbzi/lfkB8UzlGb7xzOIi/z3Ti3/M2X1wf8MFp5/2PVs/qcmBXQwZCR6VjNom/639on8k1LR+59ByfgPj6nz/4SEoH4A+VBYjy6aNH0AAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},i=a(3145),o=a(3433),n=a(1906),d=a(5318),c=a(9574),m=a(4767),u=a(6858),g=a(7648),f=a(2869);function x(e){let{value:t,duration:a=2}=e,l=(0,r.useRef)(null),i=(0,o.Y)(l,{once:!0}),c=(0,n.c)(0),m=(0,d.q)(c,{duration:1e3*a,bounce:.25});return(0,r.useEffect)(()=>{i&&c.set(t)},[i,c,t]),(0,r.useEffect)(()=>{m.on("change",e=>{l.current&&(l.current.textContent=Intl.NumberFormat("en-US").format(Math.floor(e)))})},[m]),(0,s.jsx)("span",{ref:l})}function h(){return(0,s.jsxs)("section",{className:"relative bg-navy py-20 overflow-hidden min-h-screen",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-navy-50/50 via-transparent to-navy-50/50"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(197,179,81,0.1),transparent_50%)]"}),(0,s.jsx)("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[(0,s.jsxs)(c.E.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},className:"relative",children:[(0,s.jsxs)("div",{className:"relative md:h-[600px] h-[480px] w-full max-w-md mx-auto",children:[(0,s.jsx)("div",{className:"absolute inset-0 border-2 border-gold/30 rounded-lg transform rotate-3 z-10"}),(0,s.jsx)("div",{className:"absolute inset-0 border-2 border-gold/30 rounded-lg transform -rotate-3 z-10"}),(0,s.jsxs)("div",{className:"absolute inset-0 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500",children:[(0,s.jsx)("div",{className:"absolute inset-0 border-4 border-gold/50 rounded-lg z-20"}),(0,s.jsx)(i.default,{src:l||"/placeholder.svg",alt:"Professional Coach",fill:!0,style:{objectFit:"cover",objectPosition:"center"},quality:100,priority:!0}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent z-10"})]})]}),(0,s.jsx)("div",{className:"absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-md",children:(0,s.jsx)(c.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.4},viewport:{once:!0},className:"grid grid-cols-1",children:(0,s.jsx)(g.default,{href:"https://youtube.com/@yousafijazmunawar",target:"_blank",className:"group bg-navy-50/80 backdrop-blur-lg p-4 rounded-lg border border-red-500 transition-colors hover:border-gold/40",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"text-3xl font-bold text-gold",children:[(0,s.jsx)(x,{value:150}),"+",(0,s.jsx)("div",{className:"text-sm text-gray-300",children:"Educational Videos"})]}),(0,s.jsx)(m.Z,{className:"text-red-500 size-12 group-hover:scale-110 transition-transform animate-scale-loop"})]})})})}),(0,s.jsx)("div",{className:"absolute -inset-4 bg-gold/10 rounded-full blur-3xl opacity-50"})]}),(0,s.jsxs)(c.E.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.2},viewport:{once:!0},className:"space-y-6",children:[(0,s.jsx)(c.E.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"text-3xl md:text-4xl mt-10 lg:mt-0 font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent",children:"Meet Your Mentor"}),(0,s.jsxs)(c.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},className:"space-y-4 text-sm",children:[(0,s.jsx)("p",{className:"text-gray-300 leading-relaxed",children:"Yousaf Ijaz Munawar is more than just a coach; he is a dedicated mentor committed to helping individuals navigate their emotional landscapes. With a focus on providing a supportive environment, personalized strategies, and expert insights, Yousaf's mission is to empower you to conquer depression, anxiety, and negative thoughts."}),(0,s.jsx)("p",{className:"text-gray-300 leading-relaxed",children:"Whether you're seeking to make significant changes or simply need guidance, join us on this transformative journey towards a more fulfilled and joyful life."})]}),(0,s.jsx)(c.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4},viewport:{once:!0},children:(0,s.jsx)(f.z,{asChild:!0,className:"bg-gold hover:bg-gold-light text-navy font-semibold px-5 py-4 text-lg gap-0 transform  animate-scale-loop",children:(0,s.jsxs)(g.default,{href:"/#register",children:["Register Now",(0,s.jsx)(u.Z,{className:"ml-2 h-4 w-4"})]})})})]})]})})]})}},9117:function(e,t,a){"use strict";a.d(t,{default:function(){return x}});var s=a(7437),r=a(2265),l=a(3433),i=a(1906),o=a(5318),n=a(9574),d={src:"/_next/static/media/testimonial.a3b1e8bd.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKyK/8QAGRAAAQUAAAAAAAAAAAAAAAAAAQARQUJR/9oACAEBAAE/AGIi2L//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8},c=a(3145),m=a(6858),u=a(2869),g=a(7648);function f(e){let{value:t,duration:a=2}=e,n=(0,r.useRef)(null),d=(0,l.Y)(n,{once:!0}),c=(0,i.c)(0),m=(0,o.q)(c,{duration:1e3*a,bounce:.25});return(0,r.useEffect)(()=>{d&&c.set(t)},[d,c,t]),(0,r.useEffect)(()=>{m.on("change",e=>{n.current&&(n.current.textContent=Intl.NumberFormat("en-US").format(Math.floor(e)))})},[m]),(0,s.jsx)("span",{ref:n})}function x(){return(0,s.jsxs)("section",{className:"relative bg-navy py-20 overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-navy-50/50 via-transparent to-navy-50/50"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(197,179,81,0.1),transparent_50%)]"}),(0,s.jsxs)("div",{className:"absolute inset-0 z-0",children:[(0,s.jsx)("div",{className:"absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-float"}),(0,s.jsx)("div",{className:"absolute top-40 left-20 w-1 h-1 bg-gold-light/40 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute top-60 left-32 w-3 h-3 bg-gold/30 rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute bottom-32 left-16 w-2 h-2 bg-gold-dark/50 rounded-full animate-float-fast"}),(0,s.jsx)("div",{className:"absolute top-1/4 left-1/2 w-2 h-2 bg-gold/60 rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute top-1/3 left-1/3 w-3 h-3 bg-gold-light/40 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute bottom-1/4 left-2/3 w-2 h-2 bg-gold-dark/50 rounded-full animate-float"}),(0,s.jsx)("div",{className:"absolute top-24 right-16 w-2 h-2 bg-gold/70 rounded-full animate-float-fast"}),(0,s.jsx)("div",{className:"absolute top-48 right-28 w-1.5 h-1.5 bg-gold-light rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute top-72 right-20 w-1 h-1 bg-gold/40 rounded-full animate-float"}),(0,s.jsx)("div",{className:"absolute bottom-36 right-32 w-3 h-3 bg-gold-dark/30 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute bottom-28 right-28 w-3 h-3 bg-gold-dark/30 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute bottom-28 left-8 w-3 h-3 bg-gold-dark/30 rounded-full animate-float-slow"}),(0,s.jsx)("div",{className:"absolute bottom-52 right-12 w-2 h-2 bg-gold-light/60 rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute top-12 left-6 w-1 h-1 bg-gold/50 rounded-full animate-float-fast"}),(0,s.jsx)("div",{className:"absolute top-8 right-8 w-1.5 h-1.5 bg-gold-light/40 rounded-full animate-float"}),(0,s.jsx)("div",{className:"absolute bottom-10 left-8 w-2 h-2 bg-gold-dark/30 rounded-full animate-float-delayed"}),(0,s.jsx)("div",{className:"absolute bottom-16 right-10 w-1 h-1 bg-gold/60 rounded-full animate-float-slow"})]}),(0,s.jsxs)("div",{className:"container relative mx-auto px-4 z-10",children:[(0,s.jsxs)("div",{className:"text-center mb-8",children:[(0,s.jsxs)(n.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},className:"text-6xl md:text-7xl font-bold text-gold mb-4",children:[(0,s.jsx)(f,{value:100}),"+"]}),(0,s.jsx)("h2",{className:"text-2xl md:text-3xl text-white font-semibold",children:"Satisfied Clients"})]}),(0,s.jsx)(n.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-10",children:(0,s.jsx)(u.z,{asChild:!0,className:"bg-gold hover:bg-gold-light text-navy font-semibold px-5 py-4 text-lg gap-0 transform  animate-scale-loop",children:(0,s.jsxs)(g.default,{href:"/#register",children:["Register Now",(0,s.jsx)(m.Z,{className:"ml-2 h-4 w-4"})]})})}),(0,s.jsxs)(n.E.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},className:"relative w-full",children:[(0,s.jsxs)("div",{className:"relative md:h-[600px] h-[300px] w-[300px] md:w-full max-w-[39rem] mx-auto",children:[(0,s.jsx)("div",{className:"absolute inset-0 border-2 border-gold/30 rounded-lg transform rotate-3 z-10"}),(0,s.jsx)("div",{className:"absolute inset-0 border-2 border-gold/30 rounded-lg transform -rotate-3 z-10"}),(0,s.jsxs)("div",{className:"absolute inset-0 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500",children:[(0,s.jsx)("div",{className:"absolute inset-0 border-4 border-gold/50 rounded-lg z-20"}),(0,s.jsx)(c.default,{src:d,alt:"Professional Coach",fill:!0,style:{objectFit:"cover",objectPosition:"center"},quality:100,priority:!0}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent z-10"})]})]}),(0,s.jsx)("div",{className:"absolute -inset-4 bg-gold/10 rounded-full blur-3xl opacity-50"})]})]})]})}},2869:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var s=a(7437),r=a(2265),l=a(7053),i=a(535),o=a(4508);let n=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-white bg-gold/60 animate-scale-loop"},size:{default:"h-10 px-8 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:i,asChild:d=!1,...c}=e,m=d?l.g7:"button";return(0,s.jsx)(m,{className:(0,o.cn)(n({variant:r,size:i,className:a})),ref:t,...c})});d.displayName="Button"},4508:function(e,t,a){"use strict";a.d(t,{cn:function(){return l}});var s=a(1994),r=a(3335);function l(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}},5129:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/logo.516fc08d.png",height:404,width:3060,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAH0lEQVR4nGP89++fPQMDwy8g5gFiViAWAOIvQPwXhAGMuAdE7fyEfAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}}},function(e){e.O(0,[249,971,117,744],function(){return e(e.s=6633)}),_N_E=e.O()}]);
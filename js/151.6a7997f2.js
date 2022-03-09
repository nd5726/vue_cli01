"use strict";(self["webpackChunkvue_cli01"]=self["webpackChunkvue_cli01"]||[]).push([[151],{6151:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var r=a(3396),s=a(7139),l=a(9242);const o={class:"bg-gray-100 pt-16 pb-16"},d={class:"container mx-auto mb-8"},i={class:"w-full"},c=(0,r._)("thead",null,[(0,r._)("tr",{class:"border-t border-b"},[(0,r._)("th",{class:"w-1/12 text-center py-3"}),(0,r._)("th",{class:"w-7/12 text-center py-3"},"品名"),(0,r._)("th",{class:"w-2/12 text-center py-3"},"數量"),(0,r._)("th",{class:"w-1/12 text-center py-3"},"單位"),(0,r._)("th",{class:"w-1/12 text-center py-3"},"單價")])],-1),n={key:0},u={class:"w-1/12 text-center py-3"},m=["onClick","disabled"],p={class:"w-7/12 text-center py-3 flex items-center"},h={class:"w-2/12 text-center py-3"},b=["onChange","onUpdate:modelValue"],g={class:"w-1/12 text-center py-3"},f={class:"w-1/12 text-center py-3"},x=(0,r._)("td",{class:"w-10/12",colspan:"3"},null,-1),w=(0,r._)("td",{class:"w-1/12 text-center",colspan:"1"},"總計",-1),y={class:"w-1/12 text-center py-8"},_=(0,r._)("label",{for:"name",class:"w-full text-base"},"收件人姓名",-1),v={class:"flex flex-col mb-4"},C=(0,r._)("label",{for:"tel",class:"w-full text-base"},"收件人電話",-1),L={class:"flex flex-col mb-4"},V=(0,r._)("label",{for:"address",class:"w-full text-base"},"收件地址",-1),k={class:"flex flex-col mb-4"},q=(0,r._)("label",{for:"email",class:"w-full text-base"},"Email",-1),W={class:"flex flex-col mb-4"},$=(0,r._)("label",{for:"others",class:"w-full text-base"},"其他備註",-1),U=(0,r._)("button",{type:"submit",class:"float-right mt-2 mb-16 bg-blue-500 text-white focus:ring-4 focus:ring-gray-300 rounded border border-gray-200 text-base font-bold px-8 py-2 hover:bg-blue-600 disabled:opacity-50"},"送出訂單",-1);function D(e,t,a,D,z,S){const A=(0,r.up)("v-field"),F=(0,r.up)("error-message"),I=(0,r.up)("v-form"),E=(0,r.up)("VLoading");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",o,[(0,r._)("div",d,[z.cartList.carts?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>S.removeCartAll&&S.removeCartAll(...e)),class:"border border-red-700 text-red-700 rounded px-4 py-2 mb-6 float-right hover:bg-red-700 hover:text-white",type:"button"},"清空購物車")):(0,r.kq)("",!0),(0,r._)("table",i,[c,z.cartList.carts?((0,r.wg)(),(0,r.iD)("tbody",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(z.cartList.carts,(e=>((0,r.wg)(),(0,r.iD)("tr",{class:"border-b",key:e.id},[(0,r._)("td",u,[(0,r._)("button",{onClick:t=>S.removeCartItem(e.id),type:"button",disabled:z.isLoadingitem===e.id,class:"w-8 h-8 rounded-full border border-red-700 text-red-700 hover:bg-red-700 hover:text-white disabled:opacity-50"},"×",8,m)]),(0,r._)("td",p,[(0,r._)("div",{class:"w-28 h-28 ml-2 mr-8 bg-cover rounded",style:(0,s.j5)({backgroundImage:`url( ${e.product.imageUrl} )`})},null,4),(0,r._)("p",null,(0,s.zw)(e.product.title),1)]),(0,r._)("td",h,[(0,r.wy)((0,r._)("input",{type:"number",onChange:t=>S.updateCart(e),class:"w-20 p-2 border rounded",mim:"1","onUpdate:modelValue":t=>e.qty=t},null,40,b),[[l.nr,e.qty,void 0,{number:!0}]])]),(0,r._)("td",g,(0,s.zw)(e.product.unit),1),(0,r._)("td",f,(0,s.zw)(e.product.price),1)])))),128)),(0,r._)("tr",null,[x,w,(0,r._)("td",y,(0,s.zw)(z.cartList.total)+" 元",1)])])):(0,r.kq)("",!0)]),(0,r.Wm)(I,{ref:"cartForm",onSubmit:S.onSubmit,class:"w-3/5 max-w-screen-xl mx-auto text-left"},{default:(0,r.w5)((({errors:e})=>[_,(0,r._)("div",v,[(0,r.Wm)(A,{modelValue:z.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=e=>z.form.user.name=e),id:"name",name:"name",type:"text",class:(0,s.C_)(["w-full p-2 border rounded",[e["name"]?"border-red-700":"border-gray-300"]]),placeholder:"請輸入收件人姓名",rules:"required"},null,8,["modelValue","class"]),(0,r.Wm)(F,{name:"name",class:"text-red-700 pl-2"})]),C,(0,r._)("div",L,[(0,r.Wm)(A,{modelValue:z.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=e=>z.form.user.tel=e),id:"tel",name:"tel",type:"tel",class:(0,s.C_)(["w-full p-2 border rounded",[e["tel"]?"border-red-700":"border-gray-300"]]),placeholder:"請輸入收件人電話",rules:"min:8|required"},null,8,["modelValue","class"]),(0,r.Wm)(F,{name:"tel",class:"text-red-700 pl-2"})]),V,(0,r._)("div",k,[(0,r.Wm)(A,{modelValue:z.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=e=>z.form.user.address=e),id:"address",name:"address",type:"address",class:(0,s.C_)(["w-full p-2 border rounded",[e["address"]?"border-red-700":"border-gray-300"]]),placeholder:"請輸入地址",rules:"required"},null,8,["modelValue","class"]),(0,r.Wm)(F,{name:"address",class:"text-red-700 pl-2"})]),q,(0,r._)("div",W,[(0,r.Wm)(A,{modelValue:z.form.user.email,"onUpdate:modelValue":t[4]||(t[4]=e=>z.form.user.email=e),id:"email",name:"email",type:"email",class:(0,s.C_)(["w-full p-2 border rounded",[e["email"]?"border-red-700":"border-gray-300"]]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["modelValue","class"]),(0,r.Wm)(F,{name:"email",class:"text-red-700 pl-2"})]),$,(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>z.form.message=e),name:"others",id:"others",class:"w-full p-2 border border-gray-300 rounded",cols:"30",rows:"10"},null,512),[[l.nr,z.form.message]]),U])),_:1},8,["onSubmit"])])]),(0,r.Wm)(E,{active:z.isLoading},null,8,["active"])],64)}var z={data(){return{cartList:[],isLoadingitem:"",isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/nd5726-hexschool/cart").then((e=>{this.cartList=e.data.data,console.log(this.cartList)}))},updateCart(e){const t={product_id:e.product.id,qty:e.qty};this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/nd5726-hexschool/cart/${e.id}`,{data:t}).then((e=>{alert(e.data.message),this.getCart()})).catch((e=>{alert(e.response.data.message)}))},removeCartItem(e){this.isLoading=!0,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/nd5726-hexschool/cart/${e}`).then((e=>{alert(e.data.message),this.getCart(),this.isLoading=!1})).catch((e=>{alert(e.response.data.message)}))},removeCartAll(){this.isLoading=!0,this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/nd5726-hexschool/carts").then((e=>{alert(e.data.message),this.getCart(),this.isLoading=!1})).catch((e=>{alert(e.response.data.message)}))},onSubmit(){this.isLoading=!0;const e=this.form;this.$http.post("https://vue3-course-api.hexschool.io/v2/api/nd5726-hexschool/order",{data:e}).then((e=>{alert(e.data.message),this.$refs.cartForm.resetForm(),this.getCart(),this.isLoading=!1})).catch((e=>{alert(e.response.data.message)}))}},mounted(){this.getCart()}},S=a(89);const A=(0,S.Z)(z,[["render",D]]);var F=A}}]);
//# sourceMappingURL=151.6a7997f2.js.map
const component_nav = {
    name:"component_nav",
    template: ``,
    data() {
      return {
        foo:'I am foo! , a function from "component_nav" component ! ',
        m: '"component_nav" is mounted now !'
      };
    },    
    methods: {
      async test() {alert(this.foo)},
      async autoexec(){ console.log(this.m); },
    },
    mounted : function () {
      this.autoexec()
    }
  };
  
  const component_botonera = {
    name:"component_botonera",
    template: ``,
    data() {
      return {
        bar:'I am bar! , a function from "component_botonera" component ! ',
        m: '"component_botonera" is mounted now !'
      };
    },    
    methods: {
      async test() {alert(this.bar)},
      async autoexec(){ console.log(this.m); },
    },
    mounted : function () {
      this.autoexec()
    }
  };
  
  
  
    const component_datos_usuarios = {
    name:"component_datos_usuarios",
    template: ``,
    data() {
      return {
        bar:'I am bar! , a function from "component_datos_usuarios" component ! ',
        m: '"component_datos_usuarios" is mounted now !'
      };
    },    
    methods: {
      async test() {alert(this.bar)},
      async autoexec(){ console.log(this.m); },
    },
    mounted : function () {
      this.autoexec()
    }
  };
  
  const component_principal = {
    name:"component_principal",
    template: ``,
    data() {
      return {
        bar:'I am bar! , a function from "component_principal" component ! ',
        m: '"component_principal" is mounted now !'
      };
    },    
    methods: {
      async test() {alert(this.bar)},
      async autoexec(){ console.log(this.m); },
    },
    mounted : function () {
      this.autoexec()
    }
  };
  

  
  
  const component_footer = {
    name:"component_footer",
    template: ``,
    data() {
      return {
        bar:'I am bar! , a function from "component_footer" component ! ',
        m: '"component_principal" is mounted now !'
      };
    },    
    methods: {
      async test() {alert(this.bar)},
      async autoexec(){ console.log(this.m); },
    },
    mounted : function () {
      this.autoexec()
    }
  };
  
  
  document.addEventListener('DOMContentLoaded', async function () {  
    let html = await axios.get("./components/nav.html"); 
    component_nav.template = html.data;
    Vue.component("component_nav", component_nav);
    html = await axios.get("./components/datos_usuario.html"); 
    component_datos_usuarios.template = html.data;
    Vue.component("component_datos_usuarios", component_datos_usuarios);
	html = await axios.get("./components/botonera.html");
    component_botonera.template = html.data;
    Vue.component("component_botonera", component_botonera);
	html = await axios.get("./components/principal.html"); 
    component_principal.template = html.data;
    Vue.component("component_principal", component_principal);
	html = await axios.get("./components/footer.html"); 
    component_footer.template = html.data;
    Vue.component("component_footer", component_footer);
	
	
    new Vue({
      el: '#app',  
      data: {
        m: '"App" is mounted now!',
      },
      methods:{
        autoexec:function(){ console.log(this.m); },
      },
      mounted : function () {
        this.autoexec()
      }
    })
  })
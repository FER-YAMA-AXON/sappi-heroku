let auth_storage = () =>{
  if(localStorage.getItem('nombre') || localStorage.getItem('email') ){
   return this.nombre = localStorage.getItem('nombre');
     this.email = localStorage.getItem('email');
  }else{
    this.$router.push('/login');
  }
}

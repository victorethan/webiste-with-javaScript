document.getElementById('password'.)addEventListener('click',function(){
    this.alert('password saved');

})
//======login======
function loginUser(email,password){
    const user = user.find(u=>u.email===&& u.password===password);

    if(user){
        localStorage.setItem('current user',JSON.stringify(user));
        alert('welcome back,${user.name}!');
        window.location.href='DestinationNode.html';
        return true;
    }else{
        alert('invalid email or password!');
        return false;
    }
}

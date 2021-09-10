window.onload = () => {
  console.log('test onload');
  
  let memberForm = document.getElementById('member-form');
  memberForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    let username = document.getElementById('input-username').value;
    let password = document.getElementById('input-password').value;
    let obj = {
      username: username,
      password: password
    };

    signup('/member', obj).then((res) => {
      alert(res.status);
    });
  });
};
    
async function signup(uri, data) {
  let result = await axois.post(uri, data);
  console.log(result);
  return result;
}
    
window.onload = () => {
  console.log('test onload');
  
  let memberForm = document.getElementById('member-form');
  memberForm.addEventListener('submit', async (evt) => {

    let userName = document.getElementById('input-username').value;
    let password = document.getElementById('input-password').value;
    let obj = {
      userName: userName,
      password: password
    };
    await axios.post('/member', obj);
    });
};
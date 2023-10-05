document.querySelector("#frmLogin").addEventListener("submit", (e) => {
    e.preventDefault();
  
  
    try {
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
  
      if (!isEmail(email)) throw "Lütfen geçerli bir eposta giriniz";
  
      if (!password) throw "Lütfen şifrenizi giriniz";
  
      //e.target.submit();
    } catch (error) {
      alert(error);
    }
  
  });
  
  const isEmail = (email) => {
    const regex = /\S+@\S+\.\S{2,5}$/; // basa ve sona koyulan / lar regex slajlarudir
    // reqular expression -> https://regexr.com/
  
   
  };
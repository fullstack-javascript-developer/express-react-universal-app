import axios from 'axios';
import toJson from './toJson';
import { $ } from './bling';

function ajaxContact(e) {
  e.preventDefault();



  
  
  console.log('Contact ITTT!!!!!!!!!!!!!!!!');
  
  /*
  const name = this.elements.name.value;
  const surname = this.elements.surname.value;
  const tel = this.elements.tel.value;
  const email = this.elements.email.value;
  const data={"name":name,"surname":surname,"tel":tel,"email":email};
  
  */
  
	

    


 //console.log(data);

   
    const json =  toJson( this );
    //console.log(json);
    axios
    .post(this.action,json)
    .then(res => {
     console.log(res);
    })
    .catch(console.error);

}


export default ajaxContact;

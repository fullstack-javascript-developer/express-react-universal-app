import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import ajaxContact from './modules/contact';


const contactForms = $$('form.contact');
contactForms.on('submit', ajaxContact);

import  {getDetallesParaUsuario} from './api';

async function main() {
    const abdel=await getDetallesParaUsuario('ElOuastaniAziz');
    abdel.email?.toLocaleLowerCase();// ? le indicamos que puede ser null, asi no ejecutará 
                                //toLowerCase si es null
    
}
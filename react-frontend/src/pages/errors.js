import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';

// status--for building generic error handling code/components


function ErrorPage() {
const error = useRouteError();//it gives error object. the shape of that object now depends on whether you threw a response or any other types of object or data
//if we throw the response this object include status field which actually reflects the status of the response we throw

let title = 'An Error occured!';
let message = 'Something went wrong!';

if (error.status === 500) {
   //message = JSON.parse(error.data).message; //data JSON object should should convert back to an object
  message = error.data.message;
}

if (error.status === 404 ) {
    // default status set by react router if we enter a path that is not supported
    title = 'Not found!';
    message = 'Could not find resource or page';
}


   return(
   <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>;
   </>
   )
}
export default ErrorPage;
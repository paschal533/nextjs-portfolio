

import { useRouter } from 'next/router';

const PortfolioDetail = () => {

    const router = useRouter();
    const { id } = router.query;

    return(
        <h1>detail page ID {id}</h1>
    )
}

export default PortfolioDetail;

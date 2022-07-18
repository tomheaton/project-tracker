import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';

type Data = {
    data?: any
    message: string
    success: boolean
}

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({message: "hello from project-tracker", success: true});
}

export default handler;

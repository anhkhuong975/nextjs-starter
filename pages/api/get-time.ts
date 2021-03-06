import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
    const offset = 7;
    const datetime = new Date( new Date().getTime() + offset * 3600 * 1000)
        .toUTCString().replace( / GMT$/, "" )
    res.status(200).json({ api: 'get-time', datetime, offset});
}

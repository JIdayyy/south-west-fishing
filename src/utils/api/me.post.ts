/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const checkMePost = (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'No token' });

    try {
        const decoded = jwt.verify(
            token.split(' ')[1],
            process.env.SECRET as string,
        );
        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        return res.status(200).json({
            message: 'Check successful',
            isAuth: true,
            token,
        });
    } catch (error) {
        return res.status(500).json({ errors: (error as Error).message });
    }
};

export default checkMePost;

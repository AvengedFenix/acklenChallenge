// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from './../../utils/database';

import User from "../models/userModel";

dbConnect();

export default async (req,res) => {
  const { method } = req;

  switch(method) {
    case 'GET':
      try {
        
      } catch (error) {
        res.status(400).json( {success: false} );
      }
      break;
    case 'POST':
      try {
        const user = await User.create(req.body);

        res.status(201).json({success: true, data: user})
      } catch (error) {
        
      }
    }
}

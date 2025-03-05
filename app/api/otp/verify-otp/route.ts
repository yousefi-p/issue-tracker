import sql from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { phoneNumber, otp_code } = await request.json();

  if (!phoneNumber) {
    return NextResponse.json({ message: 'Phone number and OTP are required' }, { status: 400 });
  }

  const result = await sql `SELECT * FROM otp_tb WHERE phone_number = ${phoneNumber}`;


  if (result[0].otp === otp_code) {
    const https = require('https');
    const data = JSON.stringify({
      'from': process.env.MELI_PAYAMAK_FROM,
      'to': phoneNumber,
      'text': 'شما با موفقیت وارد شدید.'
    });
    const options = {
      hostname: 'console.melipayamak.com',
      port: 443,
      path: '/api/send/simple/ddc96aadeb514a588dd799913f6d8792',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };
    const req = https.request(options, (res: { statusCode: string; on: (arg0: string, arg1: (d: any) => void) => void; }) => {
      console.log('statusCode: ' + res.statusCode);

      res.on('data', d => {
        process.stdout.write(d)
      });
    });

    req.on('error', (error: any) => {
      console.error(error);
    });
    req.write(data);
    req.end();
    return NextResponse.json({ message: 'OTP verified successfully' });
  } else {
    return NextResponse.json({ message: 'Invalid OTP' }, { status: 400 });
  }
}
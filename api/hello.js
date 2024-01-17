export default function handler(res, req) {
	res.status(200).json({
        method: req.method,
         hello: "world" 
        });
    }
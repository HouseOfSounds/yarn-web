import { sendMail } from "../../../services/mailService";

export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 5;

export async function POST(req) {
  let json = await new Response(req.body).json();
  console.log(json);
  const { email } = json;
  try {
    const res = await sendMail(
      "Yarn Email Newsletter",
      "",
      `${email} joined our Newsletter mailing list`
    );

    console.log(res, "res");
    return Response.json({
      success: true,
      message: "Success",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

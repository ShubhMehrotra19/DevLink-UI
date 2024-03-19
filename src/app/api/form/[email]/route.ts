import Email from "next-auth/providers/email";
import { ProfileUpdateProps } from "../../../../../lib/validators/profileValidators";
import services from "../../../../services";
import { EmailContext } from "./types";

export async function PUT(req: Request, ctx: EmailContext) {
  try {
    const parsedCtx = EmailContext.safeParse(ctx);

    if (!parsedCtx.success)
      return new Response(JSON.stringify({ error: "Invalid Agent ID" }), {
        status: 400,
      });

    const { email } = parsedCtx.data.params;

    const parsedBody = ProfileUpdateProps.safeParse(await req.json());

    if (!parsedBody.success)
      return new Response(JSON.stringify({ error: "Invalid Request Body" }), {
        status: 400,
      });

    const [status, response] = await services.form.update(
      { email },
      parsedBody.data
    );

    if (!status)
      return new Response(JSON.stringify({ error: response }), {
        status: 500,
      });

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error("[Profile UPDATE] Error:", error);
    return new Response(
      JSON.stringify({
        error: (error as any).message,
      }),
      {
        status: 500,
        statusText: "Something Went Wrong! Please try again later...",
      }
    );
  }
}

export async function GET(_req: Request, ctx: EmailContext) {
  try {
    const parsedCtx = EmailContext.safeParse(ctx);

    if (!parsedCtx.success)
      return new Response(JSON.stringify({ error: "Invalid Agent ID" }), {
        status: 400,
      });

    const { email } = parsedCtx.data.params;

    const [success, userData] = await services.form.getOne({ email });

    if (!success)
      return new Response(JSON.stringify({ error: "User not found!" }), {
        status: 404,
      });

    return new Response(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    console.error("[User GET] Error:", error);
    return new Response(
      JSON.stringify({
        error: "Something Went Wrong! Please try again later...",
      }),
      { status: 500 }
    );
  }
}

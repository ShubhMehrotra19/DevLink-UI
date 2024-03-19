import services from "../../../../../../services";
import { RegNoContext } from "./types";

export async function GET(_req: Request, ctx: RegNoContext) {
  try {
    const parsedCtx = RegNoContext.safeParse(ctx);

    if (!parsedCtx.success)
      return new Response(
        JSON.stringify({ error: "Invalid Registration Number" }),
        {
          status: 400,
        }
      );

    const { regno } = parsedCtx.data.params;

    const [success, userData] = await services.form.getMany({ regno });

    if (!success)
      return new Response(JSON.stringify({ error: "User not found!" }), {
        status: 404,
      });

    return new Response(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    console.error("[search GET] Error:", error);
    return new Response(
      JSON.stringify({
        error: "Something Went Wrong! Please try again later...",
      }),
      { status: 500 }
    );
  }
}

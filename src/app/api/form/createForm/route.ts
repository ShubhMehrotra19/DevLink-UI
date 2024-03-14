import { ProfileCreateProps } from "../../../../../lib/validators/profileValidators";
import service from "../../../../../services/index";

export async function POST(req: Request) {
  try {
    const parsedBody = ProfileCreateProps.safeParse(await req.json());

    if (!parsedBody.success) {
      return new Response(
        JSON.stringify({
          error: parsedBody.error,
        }),
        { status: 400 }
      );
    }

    const [success, profileDetails] = await service.form.create(
      parsedBody.data
    );

    if (!success) {
      return new Response(
        JSON.stringify({
          error: profileDetails,
        }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(profileDetails), { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Invalid Request, couldn't parse request body.",
      }),
      { status: 500 }
    );
  }
}

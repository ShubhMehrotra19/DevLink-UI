import services from "@/services";

export default async function GET(_req: Request) {
  try {
    const [success, userDetails] = await services.form.getMany({});

    if (!success) {
      return new Response(
        JSON.stringify({
          error: userDetails,
        }),
        { status: 500 }
      );
    }

    if (!userDetails)
      return new Response(JSON.stringify({ error: "No users found!" }), {
        status: 404,
      });

    return new Response(JSON.stringify(userDetails), { status: 200 });
  } catch (error) {
    console.error("[Users GET] Error:", error);
    return new Response(
      JSON.stringify({
        error: "Something Went Wrong! Please try again later...",
      }),
      { status: 500 }
    );
  }
}

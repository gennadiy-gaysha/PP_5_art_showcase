import { rest } from "msw";

const baseURL = "https://pp-5-drf-api-cb9dad6bdfdf.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "emily-johnson",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://res.cloudinary.com/dkglcxx4y/image/upload/v1/media/images/emily-johnson_iuwsev",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

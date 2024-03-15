import { Strategy as GitHubStrategy, Profile } from "passport-github2";
import { PassportStrategy } from "../../interfaces/index";
import { Request } from "express";

const githubStrategy: GitHubStrategy = new GitHubStrategy(
  {
    clientID: "96b8e97f403132716507",
    clientSecret: "b3ae91037a0217d181231039c93b9ba2d816bfea",
    callbackURL: "http://localhost:8000",
    passReqToCallback: true,
  },

  /* FIX ME 😭 */
  async (
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any) => void,
  ) => {
    try {
      return done(new Error("Github authentication callback not implemented"));
    } catch (error) {
      return done(error);
    }
  },
);

const passportGitHubStrategy: PassportStrategy = {
  name: "github",
  strategy: githubStrategy,
};

export default passportGitHubStrategy;

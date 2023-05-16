import {
  ProjectLink,
  ProjectLinks,
  ProjectStack,
  ProjectStackTech,
  ProjectTitle,
  Project as ProjectWrapper,
} from "./style";

import { Text } from "@/styles/Text";
import { userData } from "@/utils/userData";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };

    fetchData();
  }, []);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
               Linguagem:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink  href={repository.html_url}>
                <FaGithub /> Ver código no GitHub.
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink
                  
                  href={`https://${repository.homepage}`}
                >
                  <FaShare /> Ver código.
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};

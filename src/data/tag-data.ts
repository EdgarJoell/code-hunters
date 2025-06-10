import {Tag} from "../models/Tag.ts";

export function getTagsFromSeed(): Tag[] {
    return [
        {
            id: 1,
            name: "Ruby",
            color: "rgba(227, 31, 54, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 2,
            name: "Java",
            color: "rgba(255, 113, 38, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 3,
            name: "TypeScript",
            color: "rgba(38, 133, 255, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 4,
            name: "JavaScript",
            color: "rgba(255, 237, 38, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 5,
            name: "GitHub Actions",
            color: "rgba(94, 94, 94, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 6,
            name: "Spring Boot",
            color: "rgba(0, 178, 4, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 7,
            name: "Rails",
            color: "rgba(178, 0, 0, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 8,
            name: "Next.JS",
            color: "rgba(10, 98, 13, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 9,
            name: "React",
            color: "rgba(0, 72, 165, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 10,
            name: "Angular",
            color: "rgba(208, 2, 183, 0.5)",
            created_at: new Date(),
            updated_at: new Date()
        },
    ]
}
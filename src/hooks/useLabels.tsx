import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/get-labels";
import { GithubLabel } from "../issues/interfaces/label.interface";


export const useLabels = () => {

    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        // staleTime: 1000 * 60 * 60, // 1 hour
        // placeholderData: [
        //     {
        //         "id": 1109407645,
        //         "node_id": "MDU6TGFiZWwxMTA5NDA3NjQ1",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Suspense",
        //         "name": "Component: Suspense",
        //         "color": "8ffcd6",
        //         "default": false,
        //         "description": ""
        //     } satisfies GithubLabel,
        //     {
        //         "id": 710332294,
        //         "node_id": "MDU6TGFiZWw3MTAzMzIyOTQ=",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Server%20Rendering",
        //         "name": "Component: Server Rendering",
        //         "color": "d4c5f9",
        //         "default": false
        //     } satisfies GithubLabel,
        //     {
        //         "id": 204945357,
        //         "node_id": "MDU6TGFiZWwyMDQ5NDUzNTc=",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Shallow%20Renderer",
        //         "name": "Component: Shallow Renderer",
        //         "color": "eb6420",
        //         "default": false
        //     } satisfies GithubLabel,
        //     {
        //         id: 6955781886,
        //         color: "C2E0C6",
        //         node_id: "LA_kwDOAJy2Ks8AAAABnpjO_g",
        //         url: "https://api.github.com/repos/facebook/react/labels/Compiler:%20todo",
        //         name: "Compiler: todo",
        //         description: "",
        //         default: false,
        //     } satisfies GithubLabel,
        // ],
        initialData: [
            {
                "id": 1109407645,
                "node_id": "MDU6TGFiZWwxMTA5NDA3NjQ1",
                "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Suspense",
                "name": "Component: Suspense",
                "color": "8ffcd6",
                "default": false,
                "description": ""
            },
            {
                "id": 710332294,
                "node_id": "MDU6TGFiZWw3MTAzMzIyOTQ=",
                "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Server%20Rendering",
                "name": "Component: Server Rendering",
                "color": "d4c5f9",
                "default": false
            },
            {
                "id": 204945357,
                "node_id": "MDU6TGFiZWwyMDQ5NDUzNTc=",
                "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Shallow%20Renderer",
                "name": "Component: Shallow Renderer",
                "color": "eb6420",
                "default": false
            },
            {
                id: 6955781886,
                color: "C2E0C6",
                node_id: "LA_kwDOAJy2Ks8AAAABnpjO_g",
                url: "https://api.github.com/repos/facebook/react/labels/Compiler:%20todo",
                name: "Compiler: todo",
                description: "",
                default: false,
            },
        ] as GithubLabel[],
    });
  return { labelsQuery }
}

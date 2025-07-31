import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Swapshift token exchange dapp",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1tayfeta0z94qdd7p8fkznslsp42qlpxva8szmj0mj7jyytuf4u9qtqz775",
            cw20: "andr13d7nalhkhu540enp3urh6hwn8xh54j24xss9ttd2yquf0whrjcgsznd66e",
            name: "Swapshift token exchange dapp",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;

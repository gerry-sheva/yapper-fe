import {FC, ReactNode} from "react";


interface TwoContentProps {
    main: ReactNode
    right: ReactNode
}

const TwoContent: FC<TwoContentProps> = ({main, right}) => {
    return (
        <div className={"flex w-full"}>
            <main className={"w-[720px] border-l border-r"}>
                {main}
            </main>
            <section className={"flex-1 pl-6"}>
                {right}
            </section>
        </div>
    )
}

export default TwoContent
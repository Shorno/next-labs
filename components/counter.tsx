"use client"
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {useCounter, useCounterActions} from "@/store/counterStore";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";

const Counter = () => {
    const counter = useCounter()
    const {increment, decrement} = useCounterActions()
    const [decrementValue, setDecrementValue] = useState(0)
    const [incrementValue, setIncrementValue] = useState(0)


    return (
        <Card className={"w-md"}>
            <CardContent className={"flex justify-center items-center"}>
                {counter}
            </CardContent>
            <CardFooter>
                <div className={"flex justify-between w-full"}>
                    <div className={"flex"}>
                        <Input
                            type={"number"}
                            value={decrementValue}
                            className={"w-16"}
                            onChange={(e) => setDecrementValue(Number(e.target.value))}
                        />
                        <Button
                            onClick={() => decrement(decrementValue)}
                            variant={"outline"}
                        >
                            Decrement
                        </Button>
                    </div>
                    <div className={"flex"}>
                        <Input
                            type={"number"}
                            value={incrementValue}
                            className={"w-16"}
                            onChange={(e) => setIncrementValue(Number(e.target.value))}
                        />
                        <Button
                            onClick={() => increment(incrementValue)}
                            variant={"outline"}
                        >
                            Increment
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default Counter;
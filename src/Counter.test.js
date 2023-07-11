import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
    it("counter displays correct initial count", () =>{
        const { getByTestId } = render(<Counter initialCount={0}/>)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
    it("counter should add correctly if + is clicked", () =>{
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>)
        const incrementBtn = getByRole("button", {name: "+"});
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(incrementBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1);
    });
    it("counter should subtract correctly if - is clicked", () =>{
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>)
        const decrementBtn = getByRole("button", {name: "-"});
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(decrementBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(-1);
    });
    it("counter should double correctly if double is clicked", () =>{
        const { getByTestId, getByRole } = render(<Counter initialCount={1}/>)
        const doubleBtn = getByRole("button", {name: "Double"});
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(1);
        fireEvent.click(doubleBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(2);
    });
    it("counter should halve correctly if half is clicked", () =>{
        const { getByTestId, getByRole } = render(<Counter initialCount={1}/>)
        const halveBtn = getByRole("button", {name: "Half"});
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(1);
        fireEvent.click(halveBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(0.5);
    });
    it("counter should reset if reset is clicked", () =>{
        const { getByTestId, getByRole } = render(<Counter initialCount={1}/>)
        const resetBtn = getByRole("button", {name: "Reset"});
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(1);
        fireEvent.click(resetBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(0);
    });
    it("counter should switch signs if switch signs is clicked", () =>{
        const { getByTestId, getByRole } = render(<Counter initialCount={1}/>)
        const switchSignsBtn = getByRole("button", {name: "Switch signs"});
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(1);
        fireEvent.click(switchSignsBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(-1);
    });
})
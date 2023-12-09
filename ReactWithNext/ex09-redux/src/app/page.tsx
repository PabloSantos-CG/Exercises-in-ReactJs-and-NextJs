"use client";
import { useSelectorApp } from "@/redux/hook/useAppSelectorHook";
import { setAge, setName } from "@/redux/reducers/useReducer";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { name, age } = useSelectorApp((state) => state.user);

  return (
    <main>
      <p>
        Meu nome é: {name} e tenho: {age}
      </p>
      <div className="flex flex-col text-black">
        <input
          type="text"
          onChange={(ev) => dispatch(setName(ev.target.value))}
        />
        <br />
        <input
          type="number"
          onChange={(ev) => dispatch(setAge(ev.target.value))}
        />
      </div>
    </main>
  );
}

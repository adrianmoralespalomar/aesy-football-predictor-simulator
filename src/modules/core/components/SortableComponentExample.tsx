import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy,  arrayMove, } from "@dnd-kit/sortable";
import { useState } from "react";

export function SortableComponentExample() {
  const [people, setPeople] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Paul" },
  ]);

  const handleDragEnd = (event:any) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setPeople((people) => {
        const oldIndex = people.findIndex((person) => person.id === active.id);
        const newIndex = people.findIndex((person) => person.id === over.id);

        console.log(arrayMove(people, oldIndex, newIndex));
        return arrayMove(people, oldIndex, newIndex);
      });
    }

    console.log("drag end");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-4/6">
        <DndContext collisionDetection={closestCenter}  onDragEnd={handleDragEnd} >
          <h1 className="text-2xl font-bold">Users List</h1>
          <SortableContext items={people} strategy={verticalListSortingStrategy} >
            {people.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}



import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function User({ user }:any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="p-4 my-2 bg-white rounded-md shadow-md text-slate-950"
    >
      <h1 className="text-black">{user.name}</h1>
    </div>
  );
}


import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
import { useState } from "react";

//https://docs.dndkit.com/introduction/getting-started
export function DragDropComponentExample() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = ( <Draggable id="draggable">Drag me</Draggable> );
  function handleDragEnd(event:any) {
    const {over} = event;
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'Drop here'}
        </Droppable>
      ))}
    </DndContext>
  );
}

function Droppable(props:any) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = { color: isOver ? 'green' : 'black', backgroundColor: isOver ? 'gray' : 'white', margin: '10px' };
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

function Draggable(props:any) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
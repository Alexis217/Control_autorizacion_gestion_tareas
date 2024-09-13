export const fetchTodos = () => {
    return fetch("http://localhost:4000/todos", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener las tareas");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error al obtener las tareas:", error);
        throw error;
      });
  };
  
  export const fetchCreateTodo = (newTodo) => {
    return fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newTodo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al crear la tarea");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error al crear la tarea:", error);
        throw error;
      });
  };
  
  export const fetchUpdateTodo = (id, updatedTodo) => {
    return fetch(`http://localhost:4000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar la tarea");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error al actualizar la tarea:", error);
        throw error;
      });
  };
  
  export const fetchDeleteTodo = (id) => {
    return fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar la tarea");
        }
      })
      .catch((error) => {
        console.error("Error al eliminar la tarea:", error);
        throw error;
      });
  };
  

  


  
import { v4 as uuidv4 } from 'uuid'

const baseUrl = 'https://json-server-vercel-steel-sigma.vercel.app';
export const catsUrl = `${baseUrl}/categorias`;
export const videosUrl = `${baseUrl}/videos`;

export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error('%cError en la solicitud', 'color: red; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function saveData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('%cDatos guardados con éxito', 'color: blue; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;');
        } else {
            console.error('%cError al guardar datos', 'color: red; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;');
        }
    } catch (error) {
        throw error;
    }
}

export async function updateData(url, form) {
    const upData = {
        id: form.id,
        nombre: form.nombre,
        descripcion: form.descripcion,
        color: form.color,
        seccode: form.seccode
    };
    const newData = upData;
    try {
        const response = await fetch(`${url}/${newData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });
        if (response.ok) {
            console.log('%cCategoria actualizada con éxito', 'color: blue; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;');
        } else {
            console.error('%cError al guardar datos', 'color: red; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;');
        }
    } catch (error) {
        throw error;
    }
}

export async function updateVid(url, form) {
    const upData = {
        id: form.id,
        titulo: form.titulo,
        linkVideo: form.linkVideo,
        linkImagen: form.linkImagen,
        categoria: form.categoria,
        descripcion: form.descripcion,
        seccode: form.seccode
    };
    const newData = upData;
    try {
        const response = await fetch(`${url}/${newData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });
        if (response.ok) {
            console.log('%cVideo actualizado con éxito', 'color: blue; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;');
        } else {
            console.error('%cError al guardar datos', 'color: red; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;');
        }
    } catch (error) {
        throw error;
    }
}

export async function addData(url, form) {
    const nuevaCategoria = {
        id: uuidv4(),
        nombre: form.nombre,
        descripcion: form.descripcion,
        color: form.color,
        seccode: form.seccode
    };
    const newData = nuevaCategoria;
    try {
        await saveData(url, newData);
        return newData;
    } catch (error) {
        throw error;
    }
}
export async function addVid(url, form) {
    const nuevoVideo = {
        id: uuidv4(),
        titulo: form.titulo,
        linkVideo: form.linkVideo,
        linkImagen: obtenerMiniatura(form.linkVideo),
        categoria: form.categoria,
        descripcion: form.descripcion,
        seccode: form.seccode
    };
    const newData = nuevoVideo;
    try {
        await saveData(url, newData);
        return newData;
    } catch (error) {
        throw error;
    }
}
export const borrarData = async (id) => {
    try {
        await fetch(`${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
    }
};

export async function editCat(url, form) {
    const editadaCategoria = {
        id: form.id,
        nombre: form.nombre,
        descripcion: form.descripcion,
        color: form.color,
        seccode: form.seccode
    };
    const newData = editadaCategoria;
    try {
        await updateData(url, newData);
        return newData;
    } catch (error) {
        throw error;
    }
}
export async function editVid(url, form) {
    const editadoVideo = {
        id: form.id,
        titulo: form.titulo,
        linkVideo: form.linkVideo,
        linkImagen: form.linkImagen,
        categoria: form.categoria,
        descripcion: form.descripcion,
        seccode: form.seccode
    };
    const newData = editadoVideo;
    try {
        await updateVid(url, newData);
        return newData;
    } catch (error) {
        throw error;
    }
}

export function obtenerMiniatura(videoUrl) {
    let videoId = videoUrl.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    return thumbnailUrl;
}

import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue = '' }) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
            <Controller
                name={name || 'content'}
                control={control}
                render={({ field: { onChangee } }) => (
                    <Editor
                        apiKey="8bwiy3dhzy1rrbe453cbg6ajcj0f47srdvi9a2as6byucwog"
                        initialValue=""
                        init={
                            {
                                branding: false,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen",
                                    "insertdatetime media table paste code help wordcount"
                                ],
                                toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px}"
                            }}
                        onEditorChange={onChangee}
                    />
                )}
            />
        </div>
    )
}

export default RTE;
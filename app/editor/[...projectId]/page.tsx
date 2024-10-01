'use client';
import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric'; // v6
import Image from 'next/image';
const EditorPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
  useEffect(() => {
    const option: fabric.CanvasOptions = {
      backgroundColor: 'transparent',
      selectionColor: '#ccc',
      selectionLineWidth: 2
    };
    const rect = new fabric.Rect({});
    if (canvasRef?.current) {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
      }
      fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, option);
      fabricCanvasRef.current.add(rect);
    }

    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="flex-center relative h-full w-full">
      <div className="absolute z-0 h-full w-full">
        <img
          alt="back"
          src="/front.svg"
          className="h-full w-full fill-red-600 text-red-300"
        />
      </div>
      <div className="z-10 border border-dotted border-gray-500">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default EditorPage;

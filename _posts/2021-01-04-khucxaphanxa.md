---
layout: post
title: "Định luật phản xạ và khúc xạ qua một góc nhìn mới"
author: "Chính D. Trần"
categories: journal
tag: [math, physics]
image: khucxaphanxa.jpg
---

Định luật phản xạ ánh sáng và định luật khúc xạ ánh sáng là hai định luật đã rất quen thuộc trong quang hình học. Thông thường, khi chứng minh hai đinh luật này ta sẽ sử dụng các kiến thức hình học. Tuy nhiên, có một phương pháp chứng minh khác khá là độc đáo, đó chính là sử dụng cơ học để chứng minh!!!

Trước hết, chúng ta cần biết về quang trình và nguyên lí Fermat.

> **Quang trình:** Trong một môi trường trong suốt và đồng tính có chiết suất $n$, quang trình giữa hai điểm $A$ và $B$ được định nghĩa là tích giữa chiết suất $n$ và khoảng cách giữa hai điểm $A$, $B$.

> **Nguyên lí Fermat:** Khi ánh sáng truyền từ điểm $A$ tới điểm $B$, quang trình của quãng đường mà ánh sáng đi qua sẽ đạt giá trị cực trị (cực tiểu, cực đại hoặc đạt giá trị dừng) so với những quãng đường xung quanh.

## Định luật phản xạ ánh sáng

Định luật phản xạ ánh sáng được phát biểu như sau:

> Khi ánh sáng chiếu tới một bề mặt phản xạ, tia phản xạ sẽ nằm trong cùng mặt phẳng với tia tới và pháp tuyến tại điểm tới. Hơn nữa, góc phản xạ sẽ bằng góc tới, $i=r$.

Giả sử có một tia sáng xuất phát tại điểm $A$, chiếu tới một gương phẳng tại điểm $M$ và phản xạ trên gương rồi tới điểm $B$. Theo nguyên lí Fermat, quang trình của tia sáng phải cực tiểu, nghĩa là $MA+MB$ phải cực tiểu.

Bây giờ, ta sẽ xét hệ như trong hình vẽ sau. Hai dây nối lần lượt được vắt qua hai điểm $A$ và $B$, một đầu nối vào điểm $M$ còn đâu còn lại thì nối vào hai vật nặng có khối lượng $m_1=m_2=m$. Điểm $M$ có thể chuyển động tự do trong mặt phẳng $G$, bỏ qua mọi ma sát.

<center>
<iframe src="https://openprocessing.org/sketch/1467019/embed/" width="75%" height="450"></iframe>
<p><em>Nhấn giữ và di chuyển chuột để nhìn xunh quanh</em></p>
</center>

Sau khi thả cho hệ chuyển động, hệ sẽ dần tiến đến trạng thái cân bằng. Ở trạng thái này, thế năng của hệ đạt cực tiểu. Điều này có nghĩa là hai vật nặng sẽ xuống thấp nhất có thể, tương đương với việc chiều dài phần dây bên dưới $AB$ sẽ cực đại và chiều dài phần dây bên trên sẽ cực tiểu. Lúc này thì $MA+MB$ sẽ cực tiểu, đúng như ta mong muốn.

<center>
<script type="text/tikz">
    

\tikzset{every picture/.style={line width=0.75pt}} %set default line width to 0.75pt        

\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1]
%uncomment if require: \path (0,500); %set diagram left start at 0, and has height of 500

%Straight Lines [id:da9113020489637684] 
\draw    (225.4,270.41) -- (510.13,270.41) ;
%Shape: Ellipse [id:dp3392702706151973] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (363.41,270.02) .. controls (363.41,266.82) and (366.01,264.23) .. (369.21,264.23) .. controls (372.4,264.23) and (375,266.82) .. (375,270.02) .. controls (375,273.22) and (372.4,275.81) .. (369.21,275.81) .. controls (366.01,275.81) and (363.41,273.22) .. (363.41,270.02) -- cycle ;
%Shape: Ellipse [id:dp8286278282885116] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (222.1,163.46) .. controls (222.1,160.26) and (224.69,157.67) .. (227.89,157.67) .. controls (231.09,157.67) and (233.68,160.26) .. (233.68,163.46) .. controls (233.68,166.66) and (231.09,169.25) .. (227.89,169.25) .. controls (224.69,169.25) and (222.1,166.66) .. (222.1,163.46) -- cycle ;
%Shape: Ellipse [id:dp04922743192991841] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (458.4,129.48) .. controls (458.4,126.28) and (460.99,123.69) .. (464.19,123.69) .. controls (467.39,123.69) and (469.98,126.28) .. (469.98,129.48) .. controls (469.98,132.68) and (467.39,135.27) .. (464.19,135.27) .. controls (460.99,135.27) and (458.4,132.68) .. (458.4,129.48) -- cycle ;
%Straight Lines [id:da30985383230321517] 
\draw    (227.89,163.46) -- (369.21,270.02) ;
%Straight Lines [id:da961743527018762] 
\draw    (464.19,129.48) -- (369.21,270.02) ;
%Straight Lines [id:da7326945722218143] 
\draw  [dash pattern={on 4.5pt off 4.5pt}]  (369.21,169.38) -- (369.21,270.02) ;
%Straight Lines [id:da4481609532364128] 
\draw    (369.21,270.02) -- (283.65,205.4) ;
\draw [shift={(282.05,204.2)}, rotate = 37.06] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-4.9) .. controls (6.95,-2.3) and (3.31,-0.67) .. (0,0) .. controls (3.31,0.67) and (6.95,2.3) .. (10.93,4.9)   ;
%Straight Lines [id:da15300882968619978] 
\draw    (369.21,270.02) -- (420.73,193.6) ;
\draw [shift={(421.84,191.94)}, rotate = 123.99] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-4.9) .. controls (6.95,-2.3) and (3.31,-0.67) .. (0,0) .. controls (3.31,0.67) and (6.95,2.3) .. (10.93,4.9)   ;

% Text Node
\draw (353.5,283.6) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$M$};
% Text Node
\draw (216.62,126.52) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$A$};
% Text Node
\draw (456.14,92.46) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$B$};
% Text Node
\draw (347.37,220.76) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$i$};
% Text Node
\draw (377.22,215.49) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$r$};
% Text Node
\draw (280.62,168.52) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$\vec T_{1}$};
% Text Node
\draw (395.72,153.88) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$\vec T_{2}$};


\end{tikzpicture}

</script>
</center>

Xét sự cân bằng của điểm $M$. Ta dễ dàng thấy rằng điểm $M$ cân bằng khi nó nằm trong mặt phẳng chứa $AB$ và vuông góc với mặt phẳng $G$. Khi điểm $M$ cân bằng ta có

$$
    T_1\sin i=T_2\sin r\Leftrightarrow i=r.
$$

Và đó là chứng minh định luật phản xạ ánh sáng bằng cơ học.

## Định luật khúc xạ ánh sáng

Định luật khúc xạ ánh sáng, hay còn gọi là định luật Snell - Descartes, được phát biểu như sau:

> Khi ánh sáng chiếu từ một môi trường có chiết suất $n_1$ vào môi trường có chiết suất $n_2$ thì bị gãy khúc tại mặt phân cách giữa hai môi trường. Khi đó tia khúc xạ nằm trong cùng một mặt phẳng chứa tia tới và pháp tuyến tại điểm tới, và ở khác phía so với tia tới. Góc tới $i_1$ và góc khúc xạ $i_2$ liên hệ với nhau bởi biểu thức $n_1\sin i_1=n_2 \sin i_2$.

Giả sử tia sáng xuất phát từ điểm $A$ trong môi trường $n_1$, chiếu tới bề mặt phân cách hai môi trường tại điểm $M$ rồi khúc xạ tới điểm $B$ trong môi trường $n_2$. Theo nguyên lí Fermat, quang trình của tia sáng là cực tiểu, nên $n_1MA+n_2MB$ đạt giá trị cực tiểu.

Ta xét hệ như hình vẽ. Điểm $M$ có thể di chuyển tự do trong mặt phẳng $G$, khối lượng của hai vật nặng được chọn sao cho $\dfrac{m_1}{m_2}=\dfrac{n_1}{n_2}$. Bỏ qua mọi ma sát.

<center>
<iframe src="https://openprocessing.org/sketch/1464776/embed/" width="75%" height="450"></iframe>
<p><em>Nhấn giữ và di chuyển chuột để nhìn xunh quanh</em></p>
</center>

Khi thả cho hệ chuyển động. Khi hệ đạt trạng thái cân bằng thì thế năng của hệ sẽ cực tiểu. Gọi độ dài hai dây lần lượt là $l_1$ và $l_2$, thế năng của hệ sẽ là

$$
\begin{align*}
    E&=-m_1g(l_1-MA)-m_2g(l_2=MB)\\
    &=-m1gl_1-m_2gl_2+g(m_1MA+m_2MB).
\end{align*}
$$

Để thế năng của hệ cực tiểu thì $m_1MA+m_2MB$ cực tiểu, và vì $m_1, m_2$ tỉ lệ với $n_1$, $n_2$ nên $n_1MA+n_2MB$ cũng cực tiểu. Phân tích các lực tác động lên điển $M$, ta dễ dàng thấy điểm $M$ cân bằng khi nó nằm trong mặt phẳng vuông góc với $G$ và chứa $A$, $B$. 

<center>
    <script type="text/tikz">
        

\tikzset{every picture/.style={line width=0.75pt}} %set default line width to 0.75pt        

\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1]
%uncomment if require: \path (0,300); %set diagram left start at 0, and has height of 300

%Straight Lines [id:da01705092840319078] 
\draw    (150,130.89) -- (410.69,130.89) ;
%Shape: Ellipse [id:dp8782867643417362] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (348.64,263.97) .. controls (348.64,261.68) and (350.49,259.82) .. (352.79,259.82) .. controls (355.08,259.82) and (356.94,261.68) .. (356.94,263.97) .. controls (356.94,266.27) and (355.08,268.13) .. (352.79,268.13) .. controls (350.49,268.13) and (348.64,266.27) .. (348.64,263.97) -- cycle ;
%Shape: Ellipse [id:dp8284520329671505] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (169.88,48.98) .. controls (169.88,46.69) and (171.74,44.83) .. (174.03,44.83) .. controls (176.32,44.83) and (178.18,46.69) .. (178.18,48.98) .. controls (178.18,51.28) and (176.32,53.14) .. (174.03,53.14) .. controls (171.74,53.14) and (169.88,51.28) .. (169.88,48.98) -- cycle ;
%Shape: Ellipse [id:dp28953062941337615] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (286.13,130.51) .. controls (286.13,128.22) and (287.99,126.36) .. (290.28,126.36) .. controls (292.58,126.36) and (294.43,128.22) .. (294.43,130.51) .. controls (294.43,132.8) and (292.58,134.66) .. (290.28,134.66) .. controls (287.99,134.66) and (286.13,132.8) .. (286.13,130.51) -- cycle ;
%Straight Lines [id:da2943535926396412] 
\draw    (174.03,48.98) -- (290.28,130.51) ;
%Straight Lines [id:da3199188459489475] 
\draw    (290.28,130.51) -- (352.79,263.97) ;
%Straight Lines [id:da3700447351235234] 
\draw  [dash pattern={on 4.5pt off 4.5pt}]  (290.28,65.08) -- (290.28,195.95) ;
%Straight Lines [id:da25046753195703797] 
\draw    (290.28,130.51) -- (216.88,78.97) ;
\draw [shift={(215.24,77.82)}, rotate = 35.08] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
%Straight Lines [id:da20199418990035234] 
\draw    (290.28,130.51) -- (326.9,208.59) ;
\draw [shift={(327.75,210.4)}, rotate = 244.87] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;

% Text Node
\draw (274.94,89.08) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$i$};
% Text Node
\draw (293.49,165.66) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$r$};
% Text Node
\draw (165.01,19.43) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$A$};
% Text Node
\draw (344.81,270.48) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$B$};
% Text Node
\draw (304.46,104.06) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$M$};
% Text Node
\draw (218.98,44.02) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$\vec{T_{1}}$};
% Text Node
\draw (337.12,183.2) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$\vec{T_{2}}$};


\end{tikzpicture}

    </script>
</center>

Ta cũng có

$$
\begin{align*}
    T_1\sin i_1=T_2\sin i_2\Leftrightarrow m_1\sin i_1=m_2\sin i_2.
\end{align*}
$$

Và vì $\dfrac{m_1}{m_2}=\dfrac{n_1}{n_2}$ nên suy ra $n_1\sin i_1=n_2\sin i_2$.

Và đó là chứng minh định luật khúc xạ ánh sáng bằng cơ học.

> **Một vài nhận xét riêng:** Thiết nghĩ, đây là một cái nhìn mới, độc đáo về một vấn đề vốn đã quen thuộc. Việc sử dụng kiến thức của một lĩnh vực để giải quyết một vấn đề trong một lĩnh vực khác cùng là điều thường gặp không chỉ trong vật lí mà còn cả trong các ngành khoa học khác. Có lẽ phương pháp này còn có thể mở rộng áp dụng cho nhiều bài toán khác.

## Một bài toán khác

Điểm Fermat của một tam giác $ABC$ là điểm mà tổng khoảng cách từ điểm đó tới ba đỉnh của tam giác là nhỏ nhất.

<center>
<iframe src="https://openprocessing.org/sketch/1464898/embed/" width="75%" height="450"></iframe>
<p><em>Nhấn giữ chuột để di chuyển các đỉnh của tam giác<br> Điểm $M$ sẽ dần bị kéo về điểm Fermat của tam giác</em></p>
</center>

Ta có thể áp dụng phương pháp tương tự như ta đã làm ở các phần trên để tìm điểm Fermat của tam giác. Ta tưởng tượng đặt tam giác trong mặt phẳng nằm ngang, có ba sợi dây vắt qua ba đỉnh của tam giác, một đầu buộc lại với nhau tại điểm $M$, đầu còn lại có treo vật nặng $m$.

<center>
<script type="text/tikz">
    

\tikzset{every picture/.style={line width=0.75pt}} %set default line width to 0.75pt        

\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1]
%uncomment if require: \path (0,343); %set diagram left start at 0, and has height of 343

%Shape: Right Triangle [id:dp7365622946674273] 
\draw   (220.99,45.18) -- (512.07,157.29) -- (245.43,157.29) -- cycle ;
%Shape: Ellipse [id:dp5385148393160983] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (276.25,105.06) .. controls (276.25,102.24) and (278.11,99.94) .. (280.42,99.94) .. controls (282.72,99.94) and (284.59,102.24) .. (284.59,105.06) .. controls (284.59,107.89) and (282.72,110.18) .. (280.42,110.18) .. controls (278.11,110.18) and (276.25,107.89) .. (276.25,105.06) -- cycle ;
%Shape: Ellipse [id:dp38346859927173527] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (507.9,157.29) .. controls (507.9,154.47) and (509.77,152.17) .. (512.07,152.17) .. controls (514.38,152.17) and (516.24,154.47) .. (516.24,157.29) .. controls (516.24,160.12) and (514.38,162.42) .. (512.07,162.42) .. controls (509.77,162.42) and (507.9,160.12) .. (507.9,157.29) -- cycle ;
%Shape: Ellipse [id:dp17189086525418018] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (216.82,45.18) .. controls (216.82,42.35) and (218.69,40.06) .. (220.99,40.06) .. controls (223.29,40.06) and (225.16,42.35) .. (225.16,45.18) .. controls (225.16,48.01) and (223.29,50.3) .. (220.99,50.3) .. controls (218.69,50.3) and (216.82,48.01) .. (216.82,45.18) -- cycle ;
%Shape: Ellipse [id:dp5998650341336949] 
\draw  [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ,fill opacity=1 ] (241.28,157.29) .. controls (241.28,154.47) and (243.15,152.17) .. (245.45,152.17) .. controls (247.75,152.17) and (249.62,154.47) .. (249.62,157.29) .. controls (249.62,160.12) and (247.75,162.42) .. (245.45,162.42) .. controls (243.15,162.42) and (241.28,160.12) .. (241.28,157.29) -- cycle ;
%Straight Lines [id:da7247548411815863] 
\draw    (280.42,105.06) -- (245.45,157.29) ;
%Straight Lines [id:da8431075707789968] 
\draw    (220.99,45.18) -- (280.42,105.06) ;
%Straight Lines [id:da03208815101636109] 
\draw    (280.42,105.06) -- (512.07,157.29) ;
%Straight Lines [id:da9194693180750544] 
\draw    (245.45,157.29) -- (245.45,292.84) ;
%Straight Lines [id:da49082291788508736] 
\draw    (512.07,157.29) -- (512.07,241.74) ;
%Straight Lines [id:da27580906950260964] 
\draw    (220.99,45.18) -- (220.99,167.36) ;
%Shape: Can [id:dp5129928060879676] 
\draw   (233.2,167.15) -- (233.2,185.67) .. controls (233.2,187.7) and (227.72,189.35) .. (220.96,189.35) .. controls (214.19,189.35) and (208.71,187.7) .. (208.71,185.67) -- (208.71,167.15) .. controls (208.71,165.12) and (214.19,163.48) .. (220.96,163.48) .. controls (227.72,163.48) and (233.2,165.12) .. (233.2,167.15) .. controls (233.2,169.18) and (227.72,170.82) .. (220.96,170.82) .. controls (214.19,170.82) and (208.71,169.18) .. (208.71,167.15) ;
%Shape: Can [id:dp5454755627063161] 
\draw   (257.96,291.99) -- (257.96,310.51) .. controls (257.96,312.54) and (252.48,314.18) .. (245.71,314.18) .. controls (238.95,314.18) and (233.47,312.54) .. (233.47,310.51) -- (233.47,291.99) .. controls (233.47,289.96) and (238.95,288.31) .. (245.71,288.31) .. controls (252.48,288.31) and (257.96,289.96) .. (257.96,291.99) .. controls (257.96,294.01) and (252.48,295.66) .. (245.71,295.66) .. controls (238.95,295.66) and (233.47,294.01) .. (233.47,291.99) ;
%Shape: Can [id:dp5790283117642734] 
\draw   (524.99,241.53) -- (524.99,260.06) .. controls (524.99,262.09) and (519.51,263.73) .. (512.75,263.73) .. controls (505.98,263.73) and (500.5,262.09) .. (500.5,260.06) -- (500.5,241.53) .. controls (500.5,239.5) and (505.98,237.86) .. (512.75,237.86) .. controls (519.51,237.86) and (524.99,239.5) .. (524.99,241.53) .. controls (524.99,243.56) and (519.51,245.21) .. (512.75,245.21) .. controls (505.98,245.21) and (500.5,243.56) .. (500.5,241.53) ;

% Text Node
\draw (247.22,163.26) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$A$};
% Text Node
\draw (518.06,163.26) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$B$};
% Text Node
\draw (202.62,16.52) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$C$};
% Text Node
\draw (285.93,77.28) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$M$};
% Text Node
\draw (186.41,162.02) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$m$};
% Text Node
\draw (209.99,284.22) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$m$};
% Text Node
\draw (476.11,236.08) node [anchor=north west][inner sep=0.75pt]  [font=\Large]  {$m$};


\end{tikzpicture}

</script>
</center>

Bằng lí luận tương tự như trên, ta thấy rằng hệ cân bằng khi thế năng của hệ cực tiểu. Điều này có nghĩa là chiều dài phần dây bên dưới tam giác cực đại, và chiều dài phần dây bên trên cực tiểu. Lúc này điểm $M$ chính là điểm Fermat của tam giác. Và bằng cách phân tích lực, ta thấy rằng hệ cân bằng khi góc giữa các dây bằng $120^\circ$. 

Tuy nhiên, đó là trong trường hợp tam giác không có góc nào lớn hơn $120^\circ$. Nếu tam giác có một góc lớn hơn $120^\circ$, thì điểm cân bằng của điểm $M$ như trên không tồn tại nữa. Thay vào đó, lực tác dụng sẽ luôn không cân bằng và $M$ luôn bị kéo về phía góc lớn hơn $120^\circ$, đến khi nào trùng đỉnh đó thì thôi. Trong trường hợp này thì đỉnh đó chính là điểm Fermat của tam giác, và phép phân tích của chúng ta vẫn đúng. Bạn có thể tự kiểm chứng các trường hợp trong mô phỏng phía trên.

Mình đã lấy ý tưởng từ bài viết [**này**](https://www.facebook.com/OlympiadMathematical/posts/2801484370102126). Thực ra chính bài toán cuối cùng này mới là ý tưởng để mình nghĩ đến hai chứng minh trên. Và theo mình nghĩ có lẽ đây là bằng chứng cho thấy các ngành khoa học khác nhau thực chất không tách rời nhau mà có liên hệ mật thiết với nhau. Chúng ta bắt đầu với việc sử dụng vật lí để chứng minh toán, một điều có vẻ điên rồ, để rồi lại dùng chính phương pháp đó để chứng minh lại vật lí, cụ thể là dùng cơ học để chứng minh quang học!! Đó có phải  là một điều tuyệt vời không? Phương pháp này có lẽ còn thể thể mở rộng hơn nữa, nhưng phần đó sẽ là dành cho những bài blog sau.

## Tham khảo
* [https://www.facebook.com/OlympiadMathematical/posts/2801484370102126](https://www.facebook.com/OlympiadMathematical/posts/2801484370102126)
* [https://www.facebook.com/physiad/posts/104621405037158](https://www.facebook.com/physiad/posts/104621405037158)
* [https://www.youtube.com/watch?v=wWXsajE-L_o](https://www.youtube.com/watch?v=wWXsajE-L_o)
* [https://editor.p5js.org/psyduck/full/iezcQtpB](https://editor.p5js.org/psyduck/full/iezcQtpB)













 
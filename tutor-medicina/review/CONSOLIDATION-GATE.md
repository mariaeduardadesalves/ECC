# Consolidation Gate — limiares (fonte única)
R0 override | R1 total_cards==0 → LEARN | R2 overdue>=1 → REVIEW | R3 weak_open>=1 → REVIEW
R4 accuracy<0.80 → REVIEW | R5 C<0.67 → REVIEW | R6 due_today>=8 → REVIEW | R7 → LEARN
